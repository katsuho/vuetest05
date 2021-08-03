<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="mb-3"><!-- mb-3=margin bottom 3rem -->
          －計算－
        </h1>
      </v-col>
      <!-- 家族構成 -->
      <v-col cols="12">
        <h2 class="mb-3">
          ● 家族構成
        </h2>
      </v-col>
      <v-col class="lst-item"  cols="12" v-for="(person, index) in persons" :key="person.id">
        <v-row>
          <v-col cols="1" sm="1" style="text-align:right">
            {{index + 1}}
          </v-col>
          <v-col cols="5" sm="3">
            <v-text-field
              dense
              v-model="person.personNm"
              label="家族名"
              outlined
              clearable
          ></v-text-field>
          </v-col>
          <v-col cols="5" sm="3">
            <v-text-field
              dense
              surfix="歳"
              v-model.number="person.old"
              label="年齢"
              outlined
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-btn
              class="mx-2"
              fab
              light
              small
              color="white"
              @click="addRowPerson(index)"
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
              @click="delRowPerson(index)"
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
      <!-- 収入 -->
      <v-col cols="12">
        <h2 class="mb-3">
          ● 収入（月）
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
          ● 支出（月）
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
          ● 月間収支
        </h2>
      </v-col>
      <v-col cols="12">
        <h3>¥{{total | addComma}}</h3>
      </v-col>
      <!-- 推移 -->
      <v-col cols="12">
        <h2 class="mb-3">
          ● 推移
        </h2>
      </v-col>
      <v-col cols="12">
        <table>
        <tr v-for="(tRow) in transitionData" :key="tRow.id">
          <td v-for="tCol in tRow" :key="tCol.id">
            {{tCol}}
          </td>
        </tr>
        </table>
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
      persons:[
        {personNm:"あなた", old:20},
      ],
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
      },
      maxOld: 65,
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
      },
      transitionHeader: function(){
        // Max年齢
        const MaxOld:number = 65;
      },
      transitionData: function(){
        // Max年齢
        const MaxOld:number = 65;

        let transitionData = []
        
        //
        // ヘッダーデータ作成
        //
        let headerData:any = [];
        for(let i=0,iLen=this.persons.length; i<iLen; i++){
          headerData.push(this.persons[i].personNm);
        }
        headerData.push("年間収支");
        transitionData.push(headerData);

        //
        // ボディ作成
        //
        // 家族構成作成のうち、１番目にあげている人を基準にMax年齢までのデータを作る
        for(let i=0,iLen=this.maxOld-this.persons[0].old; i<iLen; i++){
          let bodyData = [];
          for(let j=0,jLen=this.persons.length; j<jLen; j++){
            bodyData.push(this.persons[j].old+i);
          }
          //bodyData.push(this.total * 12 * (i+1));
          transitionData.push(bodyData);
        }
        return transitionData;
      }
    },
    methods:{
      addRowPerson: function(rowNo:number){
        // 家族行追加
        this.persons.splice(rowNo+1,0,{personNm:"", old:0});
      },
      delRowPerson: function(rowNo:number){
        // 家族行削除
        if(this.persons.length != 1){
          this.persons.splice(rowNo,1);
        }
      },
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
      },
    }
  })
</script>
