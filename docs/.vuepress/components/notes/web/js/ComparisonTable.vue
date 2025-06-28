<template>
  <div class="comparison-table">
    <div class="table-container">
      <!-- 表头 -->
      <div class="header-row">
        <div class="header-cell expression">表达式</div>
        <div class="header-cell description">说明</div>
        <div class="header-cell result">结果</div>
      </div>
      
      <!-- 数据行 -->
      <div 
        v-for="(row, index) in tableData" 
        :key="index" 
        class="data-row"
      >
        <div class="data-cell expression">
          <code>{{ row.expression }}</code>
        </div>
        <div class="data-cell description">{{ row.description }}</div>
        <div class="data-cell result">
          <span :class="getResultClass(row.result)">{{ row.result }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tableData = [
  {
    expression: 'null == undefined',
    result: 'true',
    description: 'null 和 undefined 在双等号比较中被视为相等'
  },
  {
    expression: '"NaN" == NaN',
    result: 'false',
    description: '字符串"NaN"与NaN不相等，NaN与任何值都不相等，包括自身'
  },
  {
    expression: '5 == NaN',
    result: 'false',
    description: 'NaN与任何值都不相等，包括自身'
  },
  {
    expression: 'NaN == NaN',
    result: 'false',
    description: 'NaN与任何值都不相等，包括自身'
  },
  {
    expression: 'NaN != NaN',
    result: 'true',
    description: '由于NaN与自身不相等，因此这个比较结果为true'
  },
  {
    expression: 'false == 0',
    result: 'true',
    description: '布尔值false在比较时会转换为数字0'
  },
  {
    expression: 'true == 1',
    result: 'true',
    description: '布尔值true在比较时会转换为数字1'
  },
  {
    expression: 'true == 2',
    result: 'false',
    description: '布尔值true转换为数字1，与2不相等'
  },
  {
    expression: 'undefined == 0',
    result: 'false',
    description: 'undefined不与任何值相等，除了null'
  },
  {
    expression: 'null == 0',
    result: 'false',
    description: 'null不与任何值相等，除了undefined'
  },
  {
    expression: '"5" == 5',
    result: 'true',
    description: '字符串"5"在比较时会转换为数字5'
  }
];

const getResultClass = (result) => {
  return result === 'true' ? 'result-true' : 'result-false';
};
</script>

<style scoped>
.comparison-table {
  margin: 2rem 0;
}

.comparison-table h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3em;
}

.table-container {
  border-radius: 6px;
  border: 1px solid #eaecef;
  overflow: hidden;
  background: white;
}

/* 表头样式 */
.header-row {
  display: grid;
  grid-template-columns: 1fr 2fr 0.8fr;
  background: #f6f8fa;
  color: #24292e;
  font-weight: 600;
  border-bottom: 1px solid #e1e4e8;
}

.header-cell {
  padding: 12px 16px;
  border-right: 1px solid #e1e4e8;
}

.header-cell:last-child {
  border-right: none;
}

/* 数据行样式 */
.data-row {
  display: grid;
  grid-template-columns: 1fr 2fr 0.8fr;
  border-bottom: 1px solid #e1e4e8;
  transition: background-color 0.2s;
}

.data-row:hover {
  background-color: #f6f8fa;
}

.data-row:last-child {
  border-bottom: none;
}

.data-cell {
  padding: 12px 16px;
  border-right: 1px solid #e1e4e8;
  display: flex;
  align-items: center;
}

.data-cell:last-child {
  border-right: none;
}

/* 表达式列 */
.expression {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background-color: #f6f8fa;
}

.expression code {
  background: transparent;
  color: #476582;
  font-weight: 500;
}

/* 说明列 */
.description {
  color: #2c3e50;
  line-height: 1.5;
}

/* 结果列 */
.result {
  justify-content: center;
  font-weight: 600;
}

.result-true {
  color: #42b883;
  background: #f0f9ff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #e1f5fe;
}

.result-false {
  color: #e74c3c;
  background: #fef7f7;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid #fde8e8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-row,
  .data-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  
  .header-cell,
  .data-cell {
    padding: 8px 12px;
    border-right: none;
    border-bottom: 1px solid #e1e4e8;
  }
  
  .header-cell:last-child,
  .data-cell:last-child {
    border-bottom: none;
  }
  
  .expression code {
    font-size: 11px;
  }
  
  .result {
    justify-content: flex-start;
  }
}
</style> 