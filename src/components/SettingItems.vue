<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="mb-3"><!-- mb-3=margin bottom 3rem -->
          －計算－
        </h1>
      </v-col>
      <!-- 収入 -->
      <v-col cols="12">
        <h2 class="mb-3">
          ● 収入
        </h2>
      </v-col>
      <v-col class="lst-item"  cols="12" v-for="(income, index) in incomes" :key="income.id">
        <v-row>
          <v-col cols="1" sm="1" style="text-align:right">
            {{index + 1}}
          </v-col>
          <v-col cols="5" sm="3">
            <v-text-field
              dense
              v-model="income.incomeNm"
              label="項目名"
              outlined
              clearable
          ></v-text-field>
          </v-col>
          <v-col cols="5" sm="3">
            <v-text-field
              dense
              prefix="¥"
              v-model.number="income.value"
              label="額（円）"
              outlined
              clearable
              v-money="money"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-btn
              class="mx-2"
              fab
              light
              small
              color="white"
              @click="addRowIncome(index)"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
            <v-btn
              class="mx-2"
              fab
              light
              small
              color="white"
              @click="delRowIncome(index)"
            >
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <h3>合計：¥{{totalIncomes | addComma}}</h3>
      </v-col>
      <!-- 支出 -->
      <v-col cols="12">
        <h2 class="mb-3">
          ● 支出
        </h2>
      </v-col>
      <v-col class="lst-item" cols="12" v-for="(spending, index) in spendings" :key="spending.id">
        <v-row>
          <v-col cols="1" sm="1" style="text-align:right">
            {{index + 1}}
          </v-col>
          <v-col cols="5" sm="3">
            <v-text-field
              dense
              v-model="spending.spendingNm"
              label="項目名"
              outlined
              clearable
          ></v-text-field>
          </v-col>
          <v-col cols="5" sm="3">
            <v-text-field
              dense
              prefix="¥"
              v-model.number="spending.value"
              label="額（円）"
              outlined
              clearable
              v-money="money"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-btn
              class="mx-2"
              fab
              light
              small
              color="white"
              @click="addRowSpending(index)"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
            <v-btn
              class="mx-2"
              fab
              light
              small
              color="white"
              @click="delRowSpending(index)"
            >
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <h3>合計：¥{{totalSpendings | addComma}}</h3>
      </v-col>

      <!-- 総額 -->
      <v-col cols="12">
        <h2 class="mb-3">
          ● 総額
        </h2>
      </v-col>
      <v-col cols="12">
        <h3>¥{{total | addComma}}</h3>
      </v-col>


    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.lst-item{
  div.row{
    + div.row{
      margin-top: "3rem";
    }
  }
}
</style>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'SettingItems',

    data: () => ({
      incomes:[
        {incomeNm:"給料（手取り）", value:0},
        {incomeNm:"給料（手取り）", value:0},
      ],
      spendings:[
        {spendingNm:"家賃", value:0},
        {spendingNm:"水道", value:0},
        {spendingNm:"電気", value:0},
        {spendingNm:"ガス", value:0},
      ],
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '',
        suffix: ' ',
        precision: 0,
      }
    }),
    filters:{
        addComma: function(num:any){
            return num.toLocaleString()
        }
    },
    computed:{
      total:function():number{
        return this.totalIncomes - this.totalSpendings;
      },
      totalIncomes: function():number{
        let totalIncomes:number = 0;
        for(let i=0,iLen=this.incomes.length; i<iLen; i++){
            totalIncomes += this.incomes[i].value;
        }
        return totalIncomes;
      },
      totalSpendings: function():number{
        let totalSpendings = 0;
        for(let i=0,iLen=this.spendings.length; i<iLen; i++){
          totalSpendings += this.spendings[i].value;
        }
        return totalSpendings;
      }
    },
    methods:{
      addRowIncome: function(rowNo:number){
        // 収入行追加
        this.incomes.splice(rowNo+1,0,{incomeNm:"", value:0});
      },
      delRowIncome: function(rowNo:number){
        // 収入行削除
        if(this.incomes.length != 1){
          this.incomes.splice(rowNo,1);
        }
      },
      addRowSpending: function(rowNo:number){
        // 支出行追加
        this.spendings.splice(rowNo+1,0,{spendingNm:"", value:0});
      },
      delRowSpending: function(rowNo:number){
        // 支出行削除
        if(this.spendings.length != 1){
          this.spendings.splice(rowNo,1);
        }
      }
    }
  })
</script>
