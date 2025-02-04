#!/bin/bash

# Exit on error
set -e

# Variables
DEPLOY_BRANCH="gh-pages"
BUILD_DIR="_site"
COMMIT_USER="Deploy Script"
COMMIT_EMAIL="deploy@yourdomain.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# Check if working directory is clean
if [[ $(git status -s) ]]; then
    echo -e "${RED}Error: Working directory not clean${NC}"
    echo "Please commit or stash your changes first"
    exit 1
fi

# Build the site
echo -e "\n${GREEN}Building site...${NC}"
JEKYLL_ENV=production bundle exec jekyll build

# Create or get the gh-pages branch
if git show-ref --verify --quiet refs/heads/$DEPLOY_BRANCH; then
    echo -e "\n${GREEN}Switching to existing $DEPLOY_BRANCH branch...${NC}"
    git checkout $DEPLOY_BRANCH
else
    echo -e "\n${GREEN}Creating new $DEPLOY_BRANCH branch...${NC}"
    git checkout --orphan $DEPLOY_BRANCH
fi

# Remove existing files
echo -e "\n${GREEN}Cleaning branch...${NC}"
git rm -rf .
git clean -fxd

# Copy built site
echo -e "\n${GREEN}Copying built site...${NC}"
cp -R $BUILD_DIR/* .
rm -rf $BUILD_DIR

# Add CNAME if it exists
if [ -f "CNAME" ]; then
    echo -e "\n${GREEN}Preserving CNAME...${NC}"
    cp CNAME .tmp.CNAME
    mv .tmp.CNAME CNAME
fi

# Stage and commit
echo -e "\n${GREEN}Committing changes...${NC}"
git config user.name "$COMMIT_USER"
git config user.email "$COMMIT_EMAIL"
git add -A
git commit -m "Deploy site update $(date)"

# Push to remote
echo -e "\n${GREEN}Pushing to remote...${NC}"
git push origin $DEPLOY_BRANCH --force

# Switch back to previous branch
echo -e "\n${GREEN}Switching back to previous branch...${NC}"
git checkout -

echo -e "\n${GREEN}Deployment complete!${NC}"
