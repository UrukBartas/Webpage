import { ExpansionPanelItem } from './../../../../../models/expansion-panel-item.model'
import { Component, OnInit } from '@angular/core'
import { EChartsOption } from 'echarts'
@Component({
  selector: 'app-tokenomics',
  templateUrl: './tokenomics.component.html',
  styleUrls: ['./tokenomics.component.scss'],
})
export class TokenomicsComponent implements OnInit {
  public relations = ['GR', 'LQ', 'IDO', 'PRE', 'MARK', 'GM', 'DT']
  public selectedPie = ''
  public chartOption: EChartsOption = {
    backgroundColor: '#00000096',
    title: {
      text: '100.000.000 $URUK tokens',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc',
      },
    },

    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {d}%',
    },

    visualMap: {
      show: false,
      min: 0,
      max: 100,
      inRange: {
        colorLightness: [0.35, 1],
      },
    },
    series: [
      {
        name: 'Tokenomics allocation',
        type: 'pie',
        radius: '70%',
        center: ['50%', '50%'],
        data: [
          { value: 30, name: 'Game rewards', id: this.relations[0] },
          { value: 20, name: 'Liquidity', id: this.relations[1] },
          { value: 15, name: 'IDO', id: this.relations[2] },
          { value: 10, name: 'Presale', id: this.relations[3] },
          { value: 12, name: 'Marketing', id: this.relations[4] },
          { value: 8, name: 'Game development', id: this.relations[5] },
          { value: 5, name: 'Dev team', id: this.relations[6] },
        ].sort(function (a, b) {
          return a.value - b.value
        }),
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)',
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: '#952468',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200
        },
      },
    ],
  }

  public expansionListItems: Array<ExpansionPanelItem> = [
    {
      id: this.relations[0],
      icon: 'ActionLoot_53',
      mainLabel: 'Game rewards',
      briefDescription: '30% of total supply',
      mainDescription: 'Allocated for questing, farming & working on the stable',
    },
    {
      id: this.relations[1],
      icon: 'ActionLoot_51',
      mainLabel: 'Liquidity',
      briefDescription: '20% of total supply',
      mainDescription: 'Enough flow of capital to avoid unexpected volatility',
    },
    {
      id: this.relations[2],
      icon: 'ActionLoot_42',
      mainLabel: 'IDO',
      briefDescription: '15% of total supply',
      mainDescription: 'Initial Decentralized Offering on different platforms',
    },
    {
      id: this.relations[3],
      icon: 'ActionLoot_19',
      mainLabel: 'Marketing',
      briefDescription: '12% of total supply',
      mainDescription: 'Allocated for improving bussines development and public relations.',
    },
    {
      id: this.relations[4],
      icon: 'ActionLoot_38',
      mainLabel: 'Presale',
      briefDescription: '10% of total supply',
      mainDescription: 'First presale for whitelisted members',
    },
    {
      id: this.relations[5],
      icon: 'ActionLoot_109',
      mainLabel: 'Game development',
      briefDescription: '8% of total supply',
      mainDescription: 'Paid assets used in-game, freelancing & related activities',
    },
    {
      id: this.relations[6],
      icon: 'ActionLoot_15',
      mainLabel: 'Development team',
      briefDescription: '5% of total supply',
      mainDescription: 'Used to pay team salary and internal grow',
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  public chartClick(ev: any) {
    this.selectedPie = ev.data.id
  }
}
