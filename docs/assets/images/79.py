import os

# 設定目錄路徑和檔案名稱格式
directory = 'D:/tarot/src/assets/images'  # 替換為你的資料夾路徑
# prefix = 'image_'  # 檔名前綴，可以根據需要更改

# 切換到指定資料夾
os.chdir(directory)

# 獲取所有檔案名稱
files = [f for f in os.listdir(directory) if os.path.isfile(f)]

# 按照文件名稱排序，確保處理順序正確
files.sort()

# 迴圈重新命名檔案
for index, file in enumerate(files):
    # 提取檔案副檔名
    extension = os.path.splitext(file)[1]
    # 建立新的檔名
    new_name = f"{index + 1}{extension}"
    # 重新命名檔案
    os.rename(file, new_name)

print("檔案重命名完成！")
