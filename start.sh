echo "PORT环境变量: ${PORT}"
echo "======================================="

# 检查data目录
if [ -d "/app/data" ]; then
    echo "✅ /app/data 目录存在"
    ls -la /app/data
else
    echo "❌ /app/data 目录不存在"
    mkdir -p /app/data
    echo "✅ 已创建 /app/data 目录"
fi

echo "======================================="
echo "初始化数据库..."
echo "======================================="

# 初始化数据库
python -m backend.init_db

echo "======================================="
echo "启动uvicorn服务器..."
echo "命令: uvicorn backend.main:app --host 0.0.0.0 --port ${PORT:-8000}"
echo "======================================="

# 启动uvicorn (注意 host 必须是 0.0.0.0)
exec uvicorn backend.main:app --host 0.0.0.0 --port ${PORT:-8000}
