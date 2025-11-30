// 完整的118元素周期表数据（参考ptable.com布局）
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

    // 第5周期
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

    // 第6周期
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

    // 第7周期
    { symbol: 'Fr', number: 87, name: '钫', row: 7, col: 1, category: 'alkali-metal' },
    { symbol: 'Ra', number: 88, name: '镭', row: 7, col: 2, category: 'alkaline-earth' },
    { symbol: 'Ac', number: 89, name: '锕', row: 7, col: 3, category: 'actinide' },
    { symbol: 'Rf', number: 104, name: '鈩', row: 7, col: 4, category: 'transition-metal' },
    { symbol: 'Db', number: 105, name: '𨧀', row: 7, col: 5, category: 'transition-metal' },
    { symbol: 'Sg', number: 106, name: '𨭎', row: 7, col: 6, category: 'transition-metal' },
    { symbol: 'Bh', number: 107, name: '𨨏', row: 7, col: 7, category: 'transition-metal' },
    { symbol: 'Hs', number: 108, name: '𨭆', row: 7, col: 8, category: 'transition-metal' },
    { symbol: 'Mt', number: 109, name: '鿏', row: 7, col: 9, category: 'transition-metal' },
    { symbol: 'Ds', number: 110, name: '𫟼', row: 7, col: 10, category: 'transition-metal' },
    { symbol: 'Rg', number: 111, name: '𬬻', row: 7, col: 11, category: 'transition-metal' },
    { symbol: 'Cn', number: 112, name: '鿔', row: 7, col: 12, category: 'transition-metal' },
    { symbol: 'Nh', number: 113, name: '鿭', row: 7, col: 13, category: 'post-transition' },
    { symbol: 'Fl', number: 114, name: '𫓧', row: 7, col: 14, category: 'post-transition' },
    { symbol: 'Mc', number: 115, name: '镆', row: 7, col: 15, category: 'post-transition' },
    { symbol: 'Lv', number: 116, name: '𫟷', row: 7, col: 16, category: 'post-transition' },
    { symbol: 'Ts', number: 117, name: '石田', row: 7, col: 17, category: 'halogen' },
    { symbol: 'Og', number: 118, name: '气奥', row: 7, col: 18, category: 'noble-gas' },

    // 镧系元素（La系，原子序数58-71）- 放在第9行
    { symbol: 'Ce', number: 58, name: '铈', row: 9, col: 4, category: 'lanthanide' },
    { symbol: 'Pr', number: 59, name: '镨', row: 9, col: 5, category: 'lanthanide' },
    { symbol: 'Nd', number: 60, name: '钕', row: 9, col: 6, category: 'lanthanide' },
    { symbol: 'Pm', number: 61, name: '钷', row: 9, col: 7, category: 'lanthanide' },
    { symbol: 'Sm', number: 62, name: '钐', row: 9, col: 8, category: 'lanthanide' },
    { symbol: 'Eu', number: 63, name: '铕', row: 9, col: 9, category: 'lanthanide' },
    { symbol: 'Gd', number: 64, name: '钆', row: 9, col: 10, category: 'lanthanide' },
    { symbol: 'Tb', number: 65, name: '铽', row: 9, col: 11, category: 'lanthanide' },
    { symbol: 'Dy', number: 66, name: '镝', row: 9, col: 12, category: 'lanthanide' },
    { symbol: 'Ho', number: 67, name: '钬', row: 9, col: 13, category: 'lanthanide' },
    { symbol: 'Er', number: 68, name: '铒', row: 9, col: 14, category: 'lanthanide' },
    { symbol: 'Tm', number: 69, name: '铥', row: 9, col: 15, category: 'lanthanide' },
    { symbol: 'Yb', number: 70, name: '镱', row: 9, col: 16, category: 'lanthanide' },
    { symbol: 'Lu', number: 71, name: '镥', row: 9, col: 17, category: 'lanthanide' },

    // 锕系元素（Ac系，原子序数90-103）- 放在第10行
    { symbol: 'Th', number: 90, name: '钍', row: 10, col: 4, category: 'actinide' },
    { symbol: 'Pa', number: 91, name: '镤', row: 10, col: 5, category: 'actinide' },
    { symbol: 'U', number: 92, name: '铀', row: 10, col: 6, category: 'actinide' },
    { symbol: 'Np', number: 93, name: '镎', row: 10, col: 7, category: 'actinide' },
    { symbol: 'Pu', number: 94, name: '钚', row: 10, col: 8, category: 'actinide' },
    { symbol: 'Am', number: 95, name: '镅', row: 10, col: 9, category: 'actinide' },
    { symbol: 'Cm', number: 96, name: '锔', row: 10, col: 10, category: 'actinide' },
    { symbol: 'Bk', number: 97, name: '锫', row: 10, col: 11, category: 'actinide' },
    { symbol: 'Cf', number: 98, name: '锎', row: 10, col: 12, category: 'actinide' },
    { symbol: 'Es', number: 99, name: '锿', row: 10, col: 13, category: 'actinide' },
    { symbol: 'Fm', number: 100, name: '镄', row: 10, col: 14, category: 'actinide' },
    { symbol: 'Md', number: 101, name: '钔', row: 10, col: 15, category: 'actinide' },
    { symbol: 'No', number: 102, name: '锘', row: 10, col: 16, category: 'actinide' },
    { symbol: 'Lr', number: 103, name: '铹', row: 10, col: 17, category: 'actinide' },
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

    // 计算需要的网格尺寸（10行以容纳镧系和锕系）
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
        <div class="element-number">${element.number}</div>
        <div class="element-symbol">${element.symbol}</div>
        <div class="element-name">${element.name}</div>
    `;

    // 点击事件
    div.addEventListener('click', function() {
        toggleElementSelection(element.symbol);
    });

    return div;
}

// 切换元素选择状态
function toggleElementSelection(symbol) {
    if (selectedElements.has(symbol)) {
        selectedElements.delete(symbol);
        document.querySelector(`[data-symbol="${symbol}"]`).classList.remove('selected');
    } else {
        selectedElements.add(symbol);
        document.querySelector(`[data-symbol="${symbol}"]`).classList.add('selected');
    }

    updateSelectedDisplay();
}

// 更新已选元素显示
function updateSelectedDisplay() {
    const display = document.getElementById('selected-elements');
    const btn = document.getElementById('enter-compound-btn');

    if (selectedElements.size === 0) {
        display.textContent = '未选择';
        display.className = 'badge bg-secondary';
        btn.disabled = true;
    } else {
        const sortedElements = Array.from(selectedElements).sort();
        display.textContent = sortedElements.join(', ');
        display.className = 'badge bg-primary';
        btn.disabled = false;
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 进入化合物页面按钮
    document.getElementById('enter-compound-btn').addEventListener('click', function() {
        if (selectedElements.size > 0) {
            enterCompoundPage();
        }
    });

    // 清除选择按钮
    document.getElementById('clear-selection-btn').addEventListener('click', function() {
        clearSelection();
    });

    // Enter键快捷键
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && selectedElements.size > 0) {
            enterCompoundPage();
        }
    });
}

// 进入化合物页面
async function enterCompoundPage() {
    const elementSymbols = Array.from(selectedElements).sort().join('-');

    // 无论是否有文献，都直接跳转到化合物页面
    // 让用户可以成为第一个贡献者！
    window.location.href = `/compound/${elementSymbols}`;
}

// 清除选择
function clearSelection() {
    selectedElements.clear();
    document.querySelectorAll('.element.selected').forEach(el => {
        el.classList.remove('selected');
    });
    updateSelectedDisplay();
}
