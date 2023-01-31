/**图标类型 */
const WELLCHART = Symbol();//窨井
const RAINCHART = Symbol();//雨量
const COMMONCHART = Symbol();//公用
/**实时数据样式 */
const NORMALSTYLE = Symbol();//正常
const SWEAGESTYLE = Symbol();//一般用于污水厂,水质等
let arr = [{
  type: 'du_well',
  mainType: '排水户',
  name: '窨井',
  chartType: WELLCHART,
  isMultiple: false,
  onlineMonitorStyle: NORMALSTYLE,
  showWaterBox: true,
  menuRole: ['onlineMonitor', 'summaryAnalysis', 'installDetail'],
  defaultItems: ['urbanWaterLine'],
  showItems: ['ultrasoundWaterLine', 'urbanWaterLine'],
  unitFix: {
    'ultrasoundWaterLine': 'm'
  },
  forceTimeInterval: 0
}, {
  type: 'du_waterQuality',
  mainType: '排水户',
  name: '水质',
  chartType: COMMONCHART,
  onlineMonitorStyle: SWEAGESTYLE,
  isMultiple: false,
  menuRole: ['onlineMonitor', 'installDetail'],
  forceTimeInterval: 0
}, {
  type: 'well',
  mainType: '管网',
  name: '窨井',
  chartType: WELLCHART,
  isMultiple: false,
  onlineMonitorStyle: NORMALSTYLE,
  showWaterBox: true,
  menuRole: ['onlineMonitor', 'summaryAnalysis', 'installDetail'],
  defaultItems: ['urbanWaterLine'],
  showItems: ['ultrasoundWaterLine', 'urbanWaterLine'],
  unitFix: {
    'ultrasoundWaterLine': 'm'
  },
  nameFix: {
    'urbanWaterLine': '实时水位'
  },
  forceTimeInterval: 0
},
{
  type: 'rainfall',
  mainType: '管网',
  name: '雨量计',
  chartType: RAINCHART,
  onlineMonitorStyle: NORMALSTYLE,
  isMultiple: false,
  menuRole: ['onlineMonitor', 'installDetail'],
  isOurRain: true,
  showItems: ['rainfall'],
  forceTimeInterval: 0
},
{
  type: 'waterlogged',
  mainType: '管网',
  name: '易涝点',
  chartType: WELLCHART,
  onlineMonitorStyle: NORMALSTYLE,
  isMultiple: false,
  menuRole: ['waterloggedPanel', 'onlineMonitor', 'installDetail'],
  showItems: ['ultrasoundWaterLine'],
  // valueFix: {
  //   'ultrasoundWaterLine': ['*', 100]
  // },
  // unitFix: {
  //   'ultrasoundWaterLine': 'cm'
  // },
  forceTimeInterval: 0
},
{
  type: 'flow',
  mainType: '管网',
  name: '管网流量',
  chartType: COMMONCHART,
  onlineMonitorStyle: NORMALSTYLE,
  isMultiple: false,
  menuRole: ['onlineMonitor'],
  forceTimeInterval: 0
},
{
  type: 'waterQuality',
  mainType: '管网',
  name: '水质',
  chartType: COMMONCHART,
  onlineMonitorStyle: SWEAGESTYLE,
  isMultiple: false,
  menuRole: ['onlineMonitor', 'installDetail'],
  forceTimeInterval: 0
},
{
  type: 'overflow',
  mainType: '河道水库',
  name: '溢流口水位',
  chartType: WELLCHART,
  isMultiple: false,
  onlineMonitorStyle: NORMALSTYLE,
  showWaterBox: true,
  menuRole: ['onlineMonitor', 'summaryAnalysis', 'installDetail'],
  defaultItems: ['urbanWaterLine'],
  showItems: ['ultrasoundWaterLine', 'urbanWaterLine'],
  nameFix: {
    'urbanWaterLine': '实时水位'
  },
  forceTimeInterval: 0
},
{
  type: 'river',
  mainType: '河道水库',
  name: '河道水位',
  chartType: WELLCHART,
  onlineMonitorStyle: NORMALSTYLE,
  isMultiple: false,
  showItems: ['urbanWaterLine'],
  defaultItems: ['urbanWaterLine'],
  nameFix: {
    'urbanWaterLine': '实时水位'
  },
  menuRole: ['onlineMonitor', 'summaryAnalysis', 'installDetail'],
  forceTimeInterval: 0
},
{
  type: 'river_sh',
  mainType: '河道水库',
  name: '山洪水位',
  chartType: WELLCHART,
  isMultiple: false,
  onlineMonitorStyle: NORMALSTYLE,
  showWaterBox: true,
  menuRole: ['onlineMonitor', 'summaryAnalysis', 'installDetail'],
  defaultItems: ['urbanWaterLine'],
  nameFix: {
    'urbanWaterLine': '实时水位'
  },
  showItems: ['ultrasoundWaterLine', 'urbanWaterLine'],
  forceTimeInterval: 0
},
{
  type: 'reservoir_sh',
  mainType: '河道水库',
  name: '水库水位',
  chartType: WELLCHART,
  isMultiple: false,
  onlineMonitorStyle: NORMALSTYLE,
  showWaterBox: true,
  menuRole: ['onlineMonitor', 'summaryAnalysis', 'installDetail'],
  defaultItems: ['urbanWaterLine'],
  nameFix: {
    'urbanWaterLine': '实时水位'
  },
  showItems: ['ultrasoundWaterLine', 'urbanWaterLine'],
  forceTimeInterval: 0
},
{
  type: 'sewage',
  mainType: '厂、泵、闸',
  name: '污水厂',
  chartType: COMMONCHART,
  onlineMonitorStyle: SWEAGESTYLE,
  isMultiple: true,
  menuRole: ['onlineMonitor'],
  forceTimeInterval: 0
},
{
  type: 'pump',
  mainType: '厂、泵、闸',
  name: '泵站',
  chartType: COMMONCHART,
  onlineMonitorStyle: NORMALSTYLE,
  isMultiple: true,
  menuRole: ['onlineMonitor'],
  forceTimeInterval: 0
},
{
  type: 'gate',
  mainType: '厂、泵、闸',
  name: '闸站',
  chartType: COMMONCHART,
  onlineMonitorStyle: NORMALSTYLE,
  isMultiple: true,
  menuRole: ['onlineMonitor'],
  forceTimeInterval: 0
}
]