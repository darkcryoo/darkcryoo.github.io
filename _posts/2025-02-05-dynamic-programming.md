---
layout: post
title: "Quy Hoạch Động (Dynamic Programming) - Từ Cơ Bản Đến Nâng Cao"
date: 2025-02-05
categories: [Algorithm, Programming]
tags: [dynamic programming, algorithm, cpp]
---

# Quy Hoạch Động (Dynamic Programming)

<div class="svg-container" style="position: relative; width: 100%; padding-bottom: 50%;">
<svg style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
    <!-- Nền -->
    <rect width="800" height="400" fill="#f8f9fa"/>
    
    <!-- Tiêu đề -->
    <text x="400" y="50" text-anchor="middle" font-size="24" font-weight="bold" fill="#1a73e8" class="responsive-text">
        Quy Hoạch Động - Giải Pháp Tối Ưu
    </text>
    
    <!-- Vòng tròn chính -->
    <circle cx="400" cy="200" r="120" fill="#4285f4" opacity="0.1" stroke="#4285f4" stroke-width="2"/>
    
    <!-- Các thành phần chính -->
    <g transform="translate(400,200)">
        <!-- Bài toán lớn ở giữa -->
        <circle cx="0" cy="0" r="40" fill="#4285f4"/>
        <text x="0" y="5" text-anchor="middle" fill="white" font-size="12" class="responsive-text">Bài Toán</text>
        <text x="0" y="20" text-anchor="middle" fill="white" font-size="12" class="responsive-text">Chính</text>
        
        <!-- Các bài toán con xung quanh -->
        <g transform="rotate(0)">
            <g transform="translate(80,0)">
                <circle cx="0" cy="0" r="30" fill="#34a853"/>
                <text x="0" y="5" text-anchor="middle" fill="white" font-size="10" class="responsive-text">Con 1</text>
            </g>
        </g>
        
        <g transform="rotate(72)">
            <g transform="translate(80,0)">
                <circle cx="0" cy="0" r="30" fill="#fbbc05"/>
                <text x="0" y="5" text-anchor="middle" fill="white" font-size="10" class="responsive-text">Con 2</text>
            </g>
        </g>
        
        <g transform="rotate(144)">
            <g transform="translate(80,0)">
                <circle cx="0" cy="0" r="30" fill="#ea4335"/>
                <text x="0" y="5" text-anchor="middle" fill="white" font-size="10" class="responsive-text">Con 3</text>
            </g>
        </g>
        
        <g transform="rotate(216)">
            <g transform="translate(80,0)">
                <circle cx="0" cy="0" r="30" fill="#4285f4"/>
                <text x="0" y="5" text-anchor="middle" fill="white" font-size="10" class="responsive-text">Con 4</text>
            </g>
        </g>
        
        <g transform="rotate(288)">
            <g transform="translate(80,0)">
                <circle cx="0" cy="0" r="30" fill="#34a853"/>
                <text x="0" y="5" text-anchor="middle" fill="white" font-size="10" class="responsive-text">Con 5</text>
            </g>
        </g>
    </g>
    
    <!-- Mũi tên kết nối -->
    <g transform="translate(400,200)">
        <path d="M40,0 L50,0" stroke="#666" stroke-width="2" fill="none"/>
        <path d="M40,0 L50,0" stroke="#666" stroke-width="2" fill="none" transform="rotate(72)"/>
        <path d="M40,0 L50,0" stroke="#666" stroke-width="2" fill="none" transform="rotate(144)"/>
        <path d="M40,0 L50,0" stroke="#666" stroke-width="2" fill="none" transform="rotate(216)"/>
        <path d="M40,0 L50,0" stroke="#666" stroke-width="2" fill="none" transform="rotate(288)"/>
    </g>
    
    <!-- Bảng ghi nhớ -->
    <g transform="translate(650,200)">
        <rect x="-50" y="-60" width="100" height="120" rx="10" fill="#fbbc05" opacity="0.9"/>
        <text x="0" y="-35" text-anchor="middle" fill="white" font-size="14" class="responsive-text">Bảng</text>
        <text x="0" y="-15" text-anchor="middle" fill="white" font-size="14" class="responsive-text">Ghi Nhớ</text>
        <line x1="-40" y1="0" x2="40" y2="0" stroke="white" stroke-width="1"/>
        <text x="0" y="20" text-anchor="middle" fill="white" font-size="12" class="responsive-text">f(1) = 1</text>
        <text x="0" y="40" text-anchor="middle" fill="white" font-size="12" class="responsive-text">f(2) = 2</text>
    </g>
    
    <!-- Chú thích -->
    <g transform="translate(100,330)">
        <rect width="600" height="50" rx="5" fill="#f1f3f4"/>
        <text x="300" y="30" text-anchor="middle" font-size="14" fill="#666" class="responsive-text">
            Giải quyết bài toán lớn thông qua việc giải và lưu trữ kết quả của các bài toán con
        </text>
    </g>
</svg>
</div>

<style>
@media (max-width: 768px) {
    .responsive-text {
        font-size: 80%;
    }
}
@media (max-width: 480px) {
    .responsive-text {
        font-size: 60%;
    }
    .svg-container {
        padding-bottom: 75%; /* Tăng chiều cao tương đối trên mobile */
    }
}
</style>

Quy hoạch động (QHĐ) là một kỹ thuật giải thuật quan trọng trong lập trình, giúp giải quyết các bài toán phức tạp bằng cách chia nhỏ chúng thành các bài toán con đơn giản hơn.

<div class="table-of-contents">
<h2>Mục Lục</h2>

<ul>
    <li><a href="#1-khái-niệm-cơ-bản">1. Khái Niệm Cơ Bản</a>
        <ul>
            <li><a href="#11-nguyên-lý-cơ-bản">1.1. Nguyên lý cơ bản</a></li>
            <li><a href="#12-so-sánh-với-các-phương-pháp-khác">1.2. So sánh với các phương pháp khác</a></li>
        </ul>
    </li>
    <li><a href="#2-các-dạng-bài-toán-qhđ-cơ-bản">2. Các Dạng Bài Toán QHĐ Cơ Bản</a>
        <ul>
            <li><a href="#21-dãy-fibonacci">2.1. Dãy Fibonacci</a></li>
            <li><a href="#22-dãy-con-tăng-dài-nhất-lis">2.2. Dãy Con Tăng Dài Nhất (LIS)</a></li>
            <li><a href="#23-bài-toán-cái-túi">2.3. Bài Toán Cái Túi</a></li>
        </ul>
    </li>
    <li><a href="#3-bài-tập-thực-hành">3. Bài Tập Thực Hành</a>
        <ul>
            <li><a href="#bài-1-tổng-dãy-con">Bài 1: Tổng Dãy Con</a></li>
            <li><a href="#bài-2-xâu-con-chung-dài-nhất">Bài 2: Xâu Con Chung Dài Nhất</a></li>
            <li><a href="#bài-3-chia-kẹo">Bài 3: Chia Kẹo</a></li>
        </ul>
    </li>
    <li><a href="#4-lời-khuyên-và-kỹ-thuật-nâng-cao">4. Lời Khuyên và Kỹ Thuật Nâng Cao</a>
        <ul>
            <li><a href="#41-nhận-dạng-bài-toán-qhđ">4.1. Nhận Dạng Bài Toán QHĐ</a></li>
            <li><a href="#42-các-bước-giải-quyết">4.2. Các Bước Giải Quyết</a></li>
            <li><a href="#43-tối-ưu-hóa">4.3. Tối Ưu Hóa</a></li>
        </ul>
    </li>
    <li><a href="#5-bài-tập-về-nhà">5. Bài Tập Về Nhà</a></li>
    <li><a href="#kết-luận">Kết Luận</a></li>
    <li><a href="#tài-liệu-tham-khảo">Tài Liệu Tham Khảo</a></li>
</ul>

</div>

## 1. Khái Niệm Cơ Bản

### 1.1. Nguyên lý cơ bản
Quy hoạch động dựa trên hai nguyên tắc chính:

**a) Nguyên lý tối ưu (Optimal Substructure)**
- Một bài toán có cấu trúc con tối ưu khi lời giải tối ưu của nó được xây dựng từ lời giải tối ưu của các bài toán con
- Ví dụ: Đường đi ngắn nhất từ A đến C qua B = Đường đi ngắn nhất từ A đến B + Đường đi ngắn nhất từ B đến C

<div class="svg-container" style="position: relative; width: 100%; padding-bottom: 50%;">
<svg style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid meet">
    <!-- Background -->
    <rect width="600" height="300" fill="#f8f9fa"/>
    
    <!-- Nodes -->
    <g transform="translate(50,50)">
        <!-- Node A -->
        <circle cx="50" cy="100" r="30" fill="#4285f4"/>
        <text x="50" y="105" text-anchor="middle" fill="white" font-size="20" class="responsive-text">A</text>
        
        <!-- Node B -->
        <circle cx="250" cy="100" r="30" fill="#34a853"/>
        <text x="250" y="105" text-anchor="middle" fill="white" font-size="20" class="responsive-text">B</text>
        
        <!-- Node C -->
        <circle cx="450" cy="100" r="30" fill="#ea4335"/>
        <text x="450" y="105" text-anchor="middle" fill="white" font-size="20" class="responsive-text">C</text>
        
        <!-- Paths -->
        <path d="M80,100 L220,100" stroke="#666" stroke-width="2" fill="none"/>
        <path d="M280,100 L420,100" stroke="#666" stroke-width="2" fill="none"/>
        <path d="M80,100 Q250,200 420,100" stroke="#666" stroke-width="2" fill="none" stroke-dasharray="5,5"/>
        
        <!-- Labels -->
        <text x="150" y="90" text-anchor="middle" class="responsive-text">Đường đi tối ưu 1</text>
        <text x="350" y="90" text-anchor="middle" class="responsive-text">Đường đi tối ưu 2</text>
        <text x="250" y="180" text-anchor="middle" class="responsive-text">Đường đi trực tiếp</text>
    </g>
</svg>
</div>

**b) Bài toán con trùng lặp (Overlapping Subproblems)**
- Một bài toán lớn được chia thành các bài toán con nhỏ hơn
- Các bài toán con này được gọi nhiều lần trong quá trình giải
- Ta lưu trữ kết quả của các bài toán con để tái sử dụng

<div class="svg-container" style="position: relative; width: 100%; padding-bottom: 66.67%;">
<svg style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
    <!-- Background -->
    <rect width="600" height="400" fill="#f8f9fa"/>
    
    <!-- Tree Structure -->
    <g transform="translate(50,50)">
        <!-- Root -->
        <circle cx="250" cy="50" r="25" fill="#4285f4"/>
        <text x="250" y="55" text-anchor="middle" fill="white" class="responsive-text">F(5)</text>
        
        <!-- Level 1 -->
        <circle cx="150" cy="150" r="25" fill="#34a853"/>
        <text x="150" y="155" text-anchor="middle" fill="white" class="responsive-text">F(4)</text>
        
        <circle cx="350" cy="150" r="25" fill="#34a853"/>
        <text x="350" y="155" text-anchor="middle" fill="white" class="responsive-text">F(3)</text>
        
        <!-- Level 2 -->
        <circle cx="100" cy="250" r="25" fill="#fbbc05"/>
        <text x="100" y="255" text-anchor="middle" fill="white" class="responsive-text">F(3)</text>
        
        <circle cx="200" cy="250" r="25" fill="#fbbc05"/>
        <text x="200" y="255" text-anchor="middle" fill="white" class="responsive-text">F(2)</text>
        
        <circle cx="300" cy="250" r="25" fill="#fbbc05"/>
        <text x="300" y="255" text-anchor="middle" fill="white" class="responsive-text">F(2)</text>
        
        <circle cx="400" cy="250" r="25" fill="#fbbc05"/>
        <text x="400" y="255" text-anchor="middle" fill="white" class="responsive-text">F(1)</text>
        
        <!-- Connections -->
        <path d="M250,75 L150,125" stroke="#666" stroke-width="2"/>
        <path d="M250,75 L350,125" stroke="#666" stroke-width="2"/>
        <path d="M150,175 L100,225" stroke="#666" stroke-width="2"/>
        <path d="M150,175 L200,225" stroke="#666" stroke-width="2"/>
        <path d="M350,175 L300,225" stroke="#666" stroke-width="2"/>
        <path d="M350,175 L400,225" stroke="#666" stroke-width="2"/>
        
        <!-- Highlight Overlapping -->
        <path d="M100,250 L300,250" stroke="#ea4335" stroke-width="2" stroke-dasharray="5,5" fill="none"/>
        <text x="200" y="300" text-anchor="middle" fill="#ea4335" class="responsive-text">Bài toán con trùng lặp</text>
    </g>
</svg>
</div>

### 1.2. So sánh với các phương pháp khác

| Phương pháp | Ưu điểm | Nhược điểm |
|-------------|---------|------------|
| Đệ quy | Dễ hiểu, code ngắn gọn | Chậm, tốn bộ nhớ stack |
| Tham lam | Nhanh, đơn giản | Không phải lúc nào cũng cho kết quả tối ưu |
| QHĐ | Tối ưu, hiệu quả | Khó implement, tốn bộ nhớ |

## 2. Các Dạng Bài Toán QHĐ Cơ Bản

### 2.1. Dãy Fibonacci
Ví dụ kinh điển về QHĐ, so sánh 3 cách giải:

```cpp
// Cách 1: Đệ quy (không tối ưu) - O(2^n)
int fib_recursive(int n) {
    if (n <= 1) return n;
    return fib_recursive(n-1) + fib_recursive(n-2);
}

// Cách 2: QHĐ với mảng - O(n)
int fib_dp_array(int n) {
    if (n <= 1) return n;
    vector<int> f(n + 1);
    f[0] = 0;
    f[1] = 1;
    for(int i = 2; i <= n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}

// Cách 3: QHĐ tối ưu không gian - O(n) time, O(1) space
int fib_dp_optimized(int n) {
    if (n <= 1) return n;
    int prev2 = 0, prev1 = 1, curr;
    for(int i = 2; i <= n; i++) {
        curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
```

### 2.2. Dãy Con Tăng Dài Nhất (LIS)
Bài toán tìm dãy con tăng dài nhất với giải thích chi tiết:

```cpp
vector<int> longestIncreasingSubsequence(vector<int>& nums) {
    int n = nums.size();
    // dp[i] lưu độ dài LIS kết thúc tại i
    vector<int> dp(n, 1);
    // prev[i] lưu chỉ số phần tử trước i trong LIS
    vector<int> prev(n, -1);
    
    // Tìm độ dài LIS
    for(int i = 1; i < n; i++) {
        for(int j = 0; j < i; j++) {
            if(nums[i] > nums[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
    }
    
    // Truy vết để lấy dãy con
    vector<int> result;
    int curr = max_element(dp.begin(), dp.end()) - dp.begin();
    while(curr != -1) {
        result.push_back(nums[curr]);
        curr = prev[curr];
    }
    reverse(result.begin(), result.end());
    return result;
}
```

### 2.3. Bài Toán Cái Túi
Chi tiết về các biến thể của bài toán:

**a) Knapsack 0-1 (Cơ bản)**
```cpp
int knapsack01(vector<int>& values, vector<int>& weights, int W) {
    int n = values.size();
    // dp[i][w] là giá trị tối đa có thể đạt được với i món đồ đầu tiên và trọng lượng w
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    
    for(int i = 1; i <= n; i++) {
        for(int w = 0; w <= W; w++) {
            if(weights[i-1] <= w) {
                // Max của việc không lấy và lấy món đồ i
                dp[i][w] = max(dp[i-1][w], 
                             values[i-1] + dp[i-1][w-weights[i-1]]);
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    
    return dp[n][W];
}
```

**b) Unbounded Knapsack (Lấy nhiều lần)**
```cpp
int unboundedKnapsack(vector<int>& values, vector<int>& weights, int W) {
    vector<int> dp(W + 1, 0);
    
    for(int w = 0; w <= W; w++) {
        for(int i = 0; i < values.size(); i++) {
            if(weights[i] <= w) {
                dp[w] = max(dp[w], values[i] + dp[w-weights[i]]);
            }
        }
    }
    
    return dp[W];
}
```

## 3. Bài Tập Thực Hành

### Bài 1: Tổng Dãy Con
Cho một mảng số nguyên, tìm dãy con (không cần liên tiếp) có tổng bằng một số cho trước.

```cpp
bool subsetSum(vector<int>& nums, int target) {
    int n = nums.size();
    vector<vector<bool>> dp(n + 1, vector<bool>(target + 1, false));
    
    // Khởi tạo: tổng 0 luôn đạt được
    for(int i = 0; i <= n; i++) 
        dp[i][0] = true;
        
    for(int i = 1; i <= n; i++) {
        for(int sum = 1; sum <= target; sum++) {
            if(nums[i-1] <= sum)
                dp[i][sum] = dp[i-1][sum] || dp[i-1][sum-nums[i-1]];
            else
                dp[i][sum] = dp[i-1][sum];
        }
    }
    
    return dp[n][target];
}
```

### Bài 2: Xâu Con Chung Dài Nhất
Tìm xâu con chung dài nhất của hai xâu cho trước.

```cpp
string longestCommonSubsequence(string text1, string text2) {
    int m = text1.length(), n = text2.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    vector<vector<pair<int,int>>> prev(m + 1, vector<pair<int,int>>(n + 1, {-1,-1}));
    
    for(int i = 1; i <= m; i++) {
        for(int j = 1; j <= n; j++) {
            if(text1[i-1] == text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
                prev[i][j] = {i-1,j-1};
            } else if(dp[i-1][j] >= dp[i][j-1]) {
                dp[i][j] = dp[i-1][j];
                prev[i][j] = {i-1,j};
            } else {
                dp[i][j] = dp[i][j-1];
                prev[i][j] = {i,j-1};
            }
        }
    }
    
    // Truy vết
    string result;
    int i = m, j = n;
    while(i > 0 && j > 0) {
        if(text1[i-1] == text2[j-1]) {
            result = text1[i-1] + result;
            i--; j--;
        } else {
            auto [ni,nj] = prev[i][j];
            i = ni; j = nj;
        }
    }
    
    return result;
}
```

### Bài 3: Chia Kẹo
Cho N viên kẹo và K người, tìm số cách chia kẹo sao cho mỗi người nhận được ít nhất một viên.

```cpp
int distributeCandy(int N, int K) {
    // dp[i][j]: số cách chia i viên kẹo cho j người
    vector<vector<int>> dp(N + 1, vector<int>(K + 1, 0));
    dp[0][0] = 1;
    
    for(int i = 1; i <= N; i++) {
        for(int j = 1; j <= min(i, K); j++) {
            // Công thức: dp[i][j] = dp[i-1][j-1] + dp[i-j][j]
            dp[i][j] = dp[i-1][j-1] + (i >= j ? dp[i-j][j] : 0);
        }
    }
    
    return dp[N][K];
}
```

## 4. Lời Khuyên và Kỹ Thuật Nâng Cao

### 4.1. Nhận Dạng Bài Toán QHĐ
1. Bài toán yêu cầu tìm giá trị tối ưu (max/min)
2. Có thể chia thành các bài toán con nhỏ hơn
3. Các bài toán con có sự chồng lấp
4. Kết quả bài toán lớn phụ thuộc vào kết quả các bài toán con

### 4.2. Các Bước Giải Quyết
1. Xác định trạng thái và ý nghĩa của nó
2. Tìm công thức chuyển trạng thái
3. Xác định điều kiện cơ sở
4. Xác định thứ tự tính toán
5. Cài đặt code (có thể tối ưu không gian nếu cần)

### 4.3. Tối Ưu Hóa
1. Sử dụng mảng 1 chiều thay vì 2 chiều khi có thể
2. Dùng biến thay vì mảng nếu chỉ cần giá trị gần nhất
3. Tránh dùng đệ quy, ưu tiên dùng vòng lặp
4. Xác định rõ điều kiện biên để tránh lỗi

## 5. Bài Tập Về Nhà

1. **Bài tập cơ bản:**
   - Tìm dãy con có tổng lớn nhất
   - Tính số Fibonacci thứ n (mod 10^9+7)
   - Tìm xâu con chung dài nhất của 3 xâu

2. **Bài tập trung bình:**
   - Chia mảng thành k phần có tổng bằng nhau
   - Đếm số cách leo cầu thang (mỗi lần leo 1-3 bậc)
   - Tìm hình chữ nhật con có tổng lớn nhất

3. **Bài tập nâng cao:**
   - Bài toán người du lịch
   - Cắt thanh thép để được giá trị lớn nhất
   - Tìm xâu con đối xứng dài nhất

## Kết Luận

Quy hoạch động là một kỹ thuật mạnh mẽ giúp giải quyết nhiều bài toán phức tạp một cách hiệu quả. Việc thành thạo QHĐ đòi hỏi:
- Nhiều thời gian luyện tập
- Khả năng nhận diện mẫu bài toán
- Tư duy logic tốt
- Kỹ năng tối ưu hóa code

## Tài Liệu Tham Khảo

1. Introduction to Algorithms (CLRS)
2. Competitive Programming 3
3. [GeeksforGeeks - Dynamic Programming](https://www.geeksforgeeks.org/dynamic-programming/)
4. [LeetCode - Dynamic Programming Pattern](https://leetcode.com/tag/dynamic-programming/) 