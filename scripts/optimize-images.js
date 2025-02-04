const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const config = {
    inputDir: path.join(__dirname, '../assets/images/original'),
    outputDir: path.join(__dirname, '../assets/images'),
    sizes: {
        thumbnail: 150,
        small: 300,
        medium: 600,
        large: 1200
    },
    formats: ['webp', 'jpeg'],
    quality: 80
};

// Ensure directories exist
function ensureDirectoryExists(directory) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
}

// Process single image
async function processImage(inputPath) {
    const filename = path.basename(inputPath, path.extname(inputPath));
    
    // Process each size
    for (const [sizeName, width] of Object.entries(config.sizes)) {
        const sizeDir = path.join(config.outputDir, sizeName);
        ensureDirectoryExists(sizeDir);
        
        // Process each format
        for (const format of config.formats) {
            const outputPath = path.join(sizeDir, `${filename}.${format}`);
            
            try {
                await sharp(inputPath)
                    .resize(width, null, {
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    [format]({
                        quality: config.quality,
                        progressive: true
                    })
                    .toFile(outputPath);
                
                console.log(`✓ Created ${sizeName} ${format}: ${outputPath}`);
            } catch (error) {
                console.error(`✗ Error processing ${inputPath}:`, error);
            }
        }
    }
}

// Process all images
async function processAllImages() {
    // Ensure output directory exists
    ensureDirectoryExists(config.outputDir);
    
    // Get all images from input directory
    const images = glob.sync(path.join(config.inputDir, '**/*.{jpg,jpeg,png}'));
    
    if (images.length === 0) {
        console.log('No images found to process');
        return;
    }
    
    console.log(`Found ${images.length} images to process...`);
    
    // Process each image
    for (const image of images) {
        console.log(`\nProcessing ${path.basename(image)}...`);
        await processImage(image);
    }
    
    console.log('\n✓ Image optimization complete!');
}

// Run the optimization
processAllImages().catch(console.error);
