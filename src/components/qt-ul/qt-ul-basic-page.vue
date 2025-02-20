<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-ul-start-page">
      <qt-ul
          class="tv_list" ref="tvListRef" name="tv_list"
          :items="cacheArr" :spanCount="6" :enablePlaceholder="false"
          :stableItemSize="250">
        <template #item="{item}">
          <div class="tv_item" v-if="item.type == 1" :focusable="true" :enableFocusBorder="true">
            <img :src="item ? item.img : ''" class="tv_item_img"/>
            <qt-text class="tv_item_title" :text="item?item.text:''"></qt-text>
          </div>
          <div class="tv_item_2" v-else :focusable="true" :enableFocusBorder="true">
          </div>
        </template>

        <div class="tv_item_3" :type="3" :focusable="true" :enableFocusBorder="true">
          <qt-text class="tv_item_title" text="${text}"></qt-text>
        </div>

      </qt-ul>
    </qt-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export const imgs = ["http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20210709105200002.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20210708174600015.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20210708174500042.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20201125100100047.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/07/12/b9555d18f12547c48c401e692975bcd0.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/05/27/ab522119fe0a42bf9b68ded436d1701d.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190718165000032.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220908143800047.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20211014101900028.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20210709105300019.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190801144300020.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230810153200058.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230725143100016.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/05/27/16921a53abe74d25ad14862add0d2193.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20210618110500033.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20210709105400005.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/05/27/fd5069d8346f4c1b9198e73dfd440d3c.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190718165200013.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20211102135900000.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/09/29/cad9ef5b816c4a0bb21e573dcbf930e4.贝瓦爱数学.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190802162600043.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220228135800006.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20210802164700002.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20211102101400033.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190809140600014.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190725140800007.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20191029163800054.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20190801144400042.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20220222155100054.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20220111160600011.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220302153800048.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220111160500009.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/06/23/9518866226e94a1cbf5acabdabe537a5.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190718165000001.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20211102135600034.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2020/09/18/715caa7be82f4acb9529d1664bb07790.png"]
export const imgs2 = ["http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2020/10/16/e6092ef9277a4d3481bef3a356365026.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2020/10/16/08bce9c356b34de29666a250a2b2afd7.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2020/10/16/ae78b5e31a0a4b23835a802ca2e948bc.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20210531140600059.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2020/10/16/67b531fa8d214f4bb2782258533f6daa.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2022/05/30/6c51bf26b9b24f8fa2d6d4914cec00e9.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2020/10/16/c8a15bad98d44c6caed6b3b2ad8d585e.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2020/10/16/6d95226c359b4f2e80cd52fe646a4805.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2020/10/16/7db57fdcfb444475a4cb1a6eeb627032.png"]
export const imgs3 = ["http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20211014101900028.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20211102101800044.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/05/27/3622a6f1d3da4ab7a7a024e1959e19ac.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20211102135900000.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20211028104800024.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2022/01/28/da1949220d1b45108f18ba91b5c50a86.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220128113800057.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220128113900026.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220128113900054.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220128114000016.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220128114000047.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220128114100012.jpg"]
export const imgs4 = ["http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/05/14/03ed325ec7894ff1a75099088ba52281.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/05/14/e3fc13a10adb4b7d89a5fe8b93b01a65.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2022/01/28/bc2201d3f7a54a6cb4063e58b4aef1bf.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/05/14/9f638a6b7a0f443d987e586334ebdbb1.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/05/14/d1831b1790d84b9fb27adb805373fa38.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2022/01/28/1aad816b042b440496c57d3ca991a47e.jpg"]
export const imgs5 = ["http://lexueimg.cedock.com/eduImg/upload/img5/20240201163300018.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20240201164800027.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20240201163900037.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20240201165000035.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20240201165800032.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20240201170500009.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20240201171200030.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20240201171200055.jpg"]
export const imgs6 = ["http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230314170400041.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230314170600002.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230314170700015.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230314170900046.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230314171100011.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230314171500023.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230314170300055.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230314170500026.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230522181700013.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230314170800035.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230314171000032.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230314171100050.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230320164100051.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230317114200036.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230320164800025.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230320165000026.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230320165800057.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230320170000045.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230320164000026.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230317114300029.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230320164700025.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230320164900027.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230320165800007.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230320165900054.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20230323155800049.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20230323155900025.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20230323160000053.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20230323160100058.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20230323160300026.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20230323160400041.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230329140400007.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230329140500013.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230329154400033.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20230329140600032.png"]
export const imgs7 = ["http://lexueimg.cedock.com/eduImg/upload/img4/20201123093600039.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20201123093800014.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20201123093900004.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20210531110900043.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20210531111000032.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20210531111100021.jpg"]
export const imgs8 = ["http://lexueimg.cedock.com/eduImg/upload/img5/20230712163500038.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230711181800046.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230711175800020.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230712163500002.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230712163400003.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230711181800018.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230711175700055.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/09/06/2ff666ec2d9e48478ebb23c10760e1ac.png","http://lexueimg.cedock.com/eduImg/upload/img5/20230711181700053.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230711175700012.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230711182000011.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230711181600045.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230711175500028.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230711181900033.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230711181000019.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230711175200051.jpg"]
export const imgs9 = ["http://lexueimg.cedock.com/eduImg/upload/img4/20230815103800023.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230815103800051.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814174500059.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814174600025.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814174500025.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814174400044.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814174400005.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814174300024.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814174200015.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814170800034.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814170900008.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814171600028.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814171700009.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814171800019.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230815172500021.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814172400009.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814172400049.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814172500044.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814172600030.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814172700054.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814172800030.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173300020.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814172900030.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173000004.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173000041.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173200002.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173200042.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814172900000.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173600008.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173600033.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173500048.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173500013.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173400031.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173300058.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173700011.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814173700028.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814175500036.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814175500053.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814175600014.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814175600038.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814174800000.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230814174600051.jpg"]
export const imgs10 = ["http://lexueimg.cedock.com/eduImg/upload/img5/20230809143600002.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230809143700011.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230809143700038.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230809143800033.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230809143800056.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230815101900016.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/08/16/aa66a37874f2407f8b031abba70fe12f.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/08/16/679e63358aef4db4a2f033a629e1346f.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/08/16/5a70a08f8303459b9b1ad1144839722c.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/08/16/51848851ca7f4b59ae3f36ee261cb797.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/08/16/2de7d5f92ba943e3861324e4de5e172d.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/08/16/27b0a925e6f44c8496238c3a54b315ed.png"]

export const imgArr = imgs.concat(imgs2, imgs3, imgs4, imgs5, imgs6, imgs7, imgs8, imgs9, imgs10)

export default defineComponent({
  name: '使用初探',
  emits: [],
  setup(props, context) {
    interface Iposter {
      id: string,
      name: string,
      img: string,
      type: number,
      itemSize: number,
      tag: string,
      text: string
    }



    let cacheArr = ref<any[]>([])

    function onESCreate() {
      mockData().then(res => {
        cacheArr.value = res
        console.log(`cacheArr `, cacheArr)
      })
    }

    const mockData = (): Promise<Array<Iposter>> => {
      return new Promise(resolve => {
        const arr: Array<Iposter> = []
        for (let i = 0; i < 100; i++) {
          arr.push({
            // id: 'id'+i, name: 'name'+Math.random(),
            itemSize: 260, type: i % 2 == 0 ? 1 : 2,
            img: '',
            tag: i % 2 == 0 ? '' : 'VIP',
            text: `pos:${i}`,
            decoration: {
              top: 20,
              right: 20
            },
          })
        }
        resolve(arr)
      })
    }

    return {
      cacheArr,
      onESCreate,
    }
  }
});

</script>

<style>
.qt-ul-start-page {
  width: 1920px;
  height: 1000px;
  background-color: red;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tv_list{
  width: 1920px;
  height: 1080px;
  background-color: rgba(0,0,0,0.5);
}
.tv_item_box{
  width: 300px;
  height: 260px;
  background-color: transparent;
}
.tv_item {
  position: absolute;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  background-color: grey;
}
.tv_item_2 {
  position: absolute;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  background-color: blue;
}
.tv_item_3 {
  position: absolute;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  background-color: green;
}
.tv_item_img {
  width: 300px;
  height: 200px;
  background-color: red;
}
.tv_item_title{
  width: 300px;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  color: #000000;
  background-color: transparent;
}
.tv_item_tag{
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: gold;
  color: #000000;
  font-size: 22px;
  background-color: transparent;
}

</style>
