// 元素周期表数据（包含位置信息）
const ELEMENTS_DATA = [
    // 第1周期
    { symbol: 'H', number: 1, name: '氢', row: 1, col: 1, category: 'nonmetal' },
    { symbol: 'He', number: 2, name: '氦', row: 1, col: 18, category: 'noble-gas' },

    // 第2周期
    { symbol: 'Li', number: 3, name: '锂', row: 2, col: 1, category: 'alkali-metal' },
    { symbol: 'Be', number: 4, name: '铍', row: 2, col: 2, category: 'alkaline-earth' },
    { symbol: 'B', number: 5, name: '硼', row: 2, col: 13, category: 'metalloid' },
    { symbol: 'C', number: 6, name: '碳', row: 2, col: 14, category: 'nonmetal' },
    { symbol: 'N', number: 7, name: '氮', row: 2, col: 15, category: 'nonmetal' },
    { symbol: 'O', number: 8, name: '氧', row: 2, col: 16, category: 'nonmetal' },
    { symbol: 'F', number: 9, name: '氟', row: 2, col: 17, category: 'halogen' },
    { symbol: 'Ne', number: 10, name: '氖', row: 2, col: 18, category: 'noble-gas' },

    // 第3周期
    { symbol: 'Na', number: 11, name: '钠', row: 3, col: 1, category: 'alkali-metal' },
    { symbol: 'Mg', number: 12, name: '镁', row: 3, col: 2, category: 'alkaline-earth' },
    { symbol: 'Al', number: 13, name: '铝', row: 3, col: 13, category: 'post-transition' },
    { symbol: 'Si', number: 14, name: '硅', row: 3, col: 14, category: 'metalloid' },
    { symbol: 'P', number: 15, name: '磷', row: 3, col: 15, category: 'nonmetal' },
    { symbol: 'S', number: 16, name: '硫', row: 3, col: 16, category: 'nonmetal' },
    { symbol: 'Cl', number: 17, name: '氯', row: 3, col: 17, category: 'halogen' },
    { symbol: 'Ar', number: 18, name: '氩', row: 3, col: 18, category: 'noble-gas' },

    // 第4周期
    { symbol: 'K', number: 19, name: '钾', row: 4, col: 1, category: 'alkali-metal' },
    { symbol: 'Ca', number: 20, name: '钙', row: 4, col: 2, category: 'alkaline-earth' },
    { symbol: 'Sc', number: 21, name: '钪', row: 4, col: 3, category: 'transition-metal' },
    { symbol: 'Ti', number: 22, name: '钛', row: 4, col: 4, category: 'transition-metal' },
    { symbol: 'V', number: 23, name: '钒', row: 4, col: 5, category: 'transition-metal' },
    { symbol: 'Cr', number: 24, name: '铬', row: 4, col: 6, category: 'transition-metal' },
    { symbol: 'Mn', number: 25, name: '锰', row: 4, col: 7, category: 'transition-metal' },
    { symbol: 'Fe', number: 26, name: '铁', row: 4, col: 8, category: 'transition-metal' },
    { symbol: 'Co', number: 27, name: '钴', row: 4, col: 9, category: 'transition-metal' },
    { symbol: 'Ni', number: 28, name: '镍', row: 4, col: 10, category: 'transition-metal' },
    { symbol: 'Cu', number: 29, name: '铜', row: 4, col: 11, category: 'transition-metal' },
    { symbol: 'Zn', number: 30, name: '锌', row: 4, col: 12, category: 'transition-metal' },
    { symbol: 'Ga', number: 31, name: '镓', row: 4, col: 13, category: 'post-transition' },
    { symbol: 'Ge', number: 32, name: '锗', row: 4, col: 14, category: 'metalloid' },
    { symbol: 'As', number: 33, name: '砷', row: 4, col: 15, category: 'metalloid' },
    { symbol: 'Se', number: 34, name: '硒', row: 4, col: 16, category: 'nonmetal' },
    { symbol: 'Br', number: 35, name: '溴', row: 4, col: 17, category: 'halogen' },
    { symbol: 'Kr', number: 36, name: '氪', row: 4, col: 18, category: 'noble-gas' },

    // 第5周期 - 省略部分，仅展示关键元素
    { symbol: 'Rb', number: 37, name: '铷', row: 5, col: 1, category: 'alkali-metal' },
    { symbol: 'Sr', number: 38, name: '锶', row: 5, col: 2, category: 'alkaline-earth' },
    { symbol: 'Y', number: 39, name: '钇', row: 5, col: 3, category: 'transition-metal' },
    { symbol: 'Zr', number: 40, name: '锆', row: 5, col: 4, category: 'transition-metal' },
    { symbol: 'Nb', number: 41, name: '铌', row: 5, col: 5, category: 'transition-metal' },
    { symbol: 'Mo', number: 42, name: '钼', row: 5, col: 6, category: 'transition-metal' },
    { symbol: 'Tc', number: 43, name: '锝', row: 5, col: 7, category: 'transition-metal' },
    { symbol: 'Ru', number: 44, name: '钌', row: 5, col: 8, category: 'transition-metal' },
    { symbol: 'Rh', number: 45, name: '铑', row: 5, col: 9, category: 'transition-metal' },
    { symbol: 'Pd', number: 46, name: '钯', row: 5, col: 10, category: 'transition-metal' },
    { symbol: 'Ag', number: 47, name: '银', row: 5, col: 11, category: 'transition-metal' },
    { symbol: 'Cd', number: 48, name: '镉', row: 5, col: 12, category: 'transition-metal' },
    { symbol: 'In', number: 49, name: '铟', row: 5, col: 13, category: 'post-transition' },
    { symbol: 'Sn', number: 50, name: '锡', row: 5, col: 14, category: 'post-transition' },
    { symbol: 'Sb', number: 51, name: '锑', row: 5, col: 15, category: 'metalloid' },
    { symbol: 'Te', number: 52, name: '碲', row: 5, col: 16, category: 'metalloid' },
    { symbol: 'I', number: 53, name: '碘', row: 5, col: 17, category: 'halogen' },
    { symbol: 'Xe', number: 54, name: '氙', row: 5, col: 18, category: 'noble-gas' },

    // 第6周期 - 主要元素
    { symbol: 'Cs', number: 55, name: '铯', row: 6, col: 1, category: 'alkali-metal' },
    { symbol: 'Ba', number: 56, name: '钡', row: 6, col: 2, category: 'alkaline-earth' },
    { symbol: 'La', number: 57, name: '镧', row: 6, col: 3, category: 'lanthanide' },
    { symbol: 'Hf', number: 72, name: '铪', row: 6, col: 4, category: 'transition-metal' },
    { symbol: 'Ta', number: 73, name: '钽', row: 6, col: 5, category: 'transition-metal' },
    { symbol: 'W', number: 74, name: '钨', row: 6, col: 6, category: 'transition-metal' },
    { symbol: 'Re', number: 75, name: '铼', row: 6, col: 7, category: 'transition-metal' },
    { symbol: 'Os', number: 76, name: '锇', row: 6, col: 8, category: 'transition-metal' },
    { symbol: 'Ir', number: 77, name: '铱', row: 6, col: 9, category: 'transition-metal' },
    { symbol: 'Pt', number: 78, name: '铂', row: 6, col: 10, category: 'transition-metal' },
    { symbol: 'Au', number: 79, name: '金', row: 6, col: 11, category: 'transition-metal' },
    { symbol: 'Hg', number: 80, name: '汞', row: 6, col: 12, category: 'transition-metal' },
    { symbol: 'Tl', number: 81, name: '铊', row: 6, col: 13, category: 'post-transition' },
    { symbol: 'Pb', number: 82, name: '铅', row: 6, col: 14, category: 'post-transition' },
    { symbol: 'Bi', number: 83, name: '铋', row: 6, col: 15, category: 'post-transition' },
    { symbol: 'Po', number: 84, name: '钋', row: 6, col: 16, category: 'metalloid' },
    { symbol: 'At', number: 85, name: '砹', row: 6, col: 17, category: 'halogen' },
    { symbol: 'Rn', number: 86, name: '氡', row: 6, col: 18, category: 'noble-gas' },

    // 第7周期 - 简化
    { symbol: 'Fr', number: 87, name: '钫', row: 7, col: 1, category: 'alkali-metal' },
    { symbol: 'Ra', number: 88, name: '镭', row: 7, col: 2, category: 'alkaline-earth' },
    { symbol: 'Ac', number: 89, name: '锕', row: 7, col: 3, category: 'actinide' },

    // 镧系元素 (简化显示)
    { symbol: 'Ce', number: 58, name: '铈', row: 9, col: 4, category: 'lanthanide' },
    { symbol: 'Pr', number: 59, name: '镨', row: 9, col: 5, category: 'lanthanide' },
    { symbol: 'Nd', number: 60, name: '钕', row: 9, col: 6, category: 'lanthanide' },
    { symbol: 'Pm', number: 61, name: '钷', row: 9, col: 7, category: 'lanthanide' },
    { symbol: 'Sm', number: 62, name: '钐', row: 9, col: 8, category: 'lanthanide' },
    { symbol: 'Eu', number: 63, name: '铕', row: 9, col: 9, category: 'lanthanide' },
    { symbol: 'Gd', number: 64, name: '钆', row: 9, col: 10, category: 'lanthanide' },
];

// 全局变量
let selectedElements = new Set();
let loadingModal;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
    renderPeriodicTable();
    setupEventListeners();
});

// 渲染元素周期表
function renderPeriodicTable() {
    const container = document.getElementById('periodic-table');
    container.innerHTML = '';

    // 计算需要的网格尺寸
    const maxRow = Math.max(...ELEMENTS_DATA.map(e => e.row));
    const maxCol = 18;

    // 创建网格（包含空白格子）
    const grid = [];
    for (let row = 1; row <= maxRow; row++) {
        for (let col = 1; col <= maxCol; col++) {
            const element = ELEMENTS_DATA.find(e => e.row === row && e.col === col);
            if (element) {
                grid.push(createElementDiv(element));
            } else {
                // 空白格子
                const emptyDiv = document.createElement('div');
                emptyDiv.className = 'element empty';
                grid.push(emptyDiv);
            }
        }
    }

    // 添加到容器
    grid.forEach(el => container.appendChild(el));
}

// 创建元素div
function createElementDiv(element) {
    const div = document.createElement('div');
    div.className = `element ${element.category}`;
    div.dataset.symbol = element.symbol;
    div.dataset.number = element.number;
    div.dataset.name = element.name;

    div.innerHTML = `
        <div class="atomic-number">${element.number}</div>
        <div class="symbol">${element.symbol}</div>
        <div class="name">${element.name}</div>
    `;

    div.addEventListener('click', () => toggleElement(element.symbol, div));

    return div;
}

// 切换元素选中状态
function toggleElement(symbol, element) {
    if (selectedElements.has(symbol)) {
        selectedElements.delete(symbol);
        element.classList.remove('selected');
    } else {
        selectedElements.add(symbol);
        element.classList.add('selected');
    }

    updateSelectedDisplay();
}

// 更新选中元素显示
function updateSelectedDisplay() {
    const displayEl = document.getElementById('selected-elements');
    const enterBtn = document.getElementById('enter-compound-btn');

    if (selectedElements.size === 0) {
        displayEl.textContent = '未选择';
        displayEl.className = 'badge bg-secondary';
        enterBtn.disabled = true;
    } else {
        const symbols = Array.from(selectedElements).sort().join(', ');
        displayEl.textContent = symbols;
        displayEl.className = 'badge bg-primary';
        enterBtn.disabled = false;
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 进入化合物页面按钮
    document.getElementById('enter-compound-btn').addEventListener('click', checkAndNavigate);

    // 清除选择按钮
    document.getElementById('clear-selection-btn').addEventListener('click', clearSelection);

    // Enter键快捷跳转
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && selectedElements.size > 0) {
            checkAndNavigate();
        }
    });
}

// 检查并导航到化合物页面
async function checkAndNavigate() {
    if (selectedElements.size === 0) return;

    const symbols = Array.from(selectedElements);

    // 显示加载提示
    loadingModal.show();

    try {
        // 调用API检查元素组合（仅验证元素是否有效）
        const response = await fetch('/api/compounds/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                element_symbols: symbols
            })
        });

        const data = await response.json();

        loadingModal.hide();

        if (response.ok) {
            // 无论是否有文献，都直接跳转到化合物页面
            // 让用户可以成为第一个贡献者！
            window.location.href = `/compound/${data.element_symbols}`;
        } else {
            alert('错误: ' + (data.detail || '未知错误'));
        }
    } catch (error) {
        loadingModal.hide();
        console.error('请求失败:', error);
        alert('网络错误，请检查服务器是否运行');
    }
}

// 清除选择
function clearSelection() {
    selectedElements.clear();
    document.querySelectorAll('.element.selected').forEach(el => {
        el.classList.remove('selected');
    });
    updateSelectedDisplay();
}
