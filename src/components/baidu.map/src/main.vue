<template>
  <div>
    <el-form :inline="true" size="small">
      <el-form-item label="地址">
        <el-autocomplete
          :fetch-suggestions="onQuerySearch"
          v-model="form.address"
          placeholder="请输入地址"
          @select="onHandleSelect"
        ></el-autocomplete>
      </el-form-item>
    </el-form>
    <!-- 绑定一个有属性的对象 v-bind="obj" -->
    <baidu-map
     v-bind="mapAttrs"
     @ready="onReady"
     class="ly-baidu-map"
    >
    <bm-scale anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :offset="{width: 160, height: 40}"></bm-scale>
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <bm-overview-map :isOpen="true"></bm-overview-map>
    <bm-panorama :offset="{width: 80, height: 15}"></bm-panorama>
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :offset="{width: 40, height: 160}" @locationSuccess="locationSuccess"></bm-geolocation>
    </baidu-map>
  </div>
</template>
<script>
// 局部注册 详见：https://dafrok.github.io/vue-baidu-map/#/zh/start/usage
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmScale from 'vue-baidu-map/components/controls/Scale.vue'
import BmNavigation from 'vue-baidu-map/components/controls/Navigation.vue'
import BmOverviewMap from 'vue-baidu-map/components/controls/OverviewMap'
import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation'
import BmPanorama from 'vue-baidu-map/components/controls/Panorama'
export default {
  name: 'LyBaiduMap',
  components: {
    BaiduMap,
    BmScale,
    BmNavigation,
    BmOverviewMap,
    BmGeolocation,
    BmPanorama
  },
  data () {
    return {
      form: {
        address: '',
        lng: 116.404,
        lat: 39.915
      },
      mapAttrs: {
        ak: 'CwOs2DRLoptFTFp71HypA64yENcNBGQC',
        // center: '北京',
        zoom: 14,
        mapStyle: {
          styleJson: [
            {
              'featureType': 'all',
              'elementType': 'geometry',
              'stylers': {
                'hue': '#007fff',
                'saturation': 89
              }
            },
            {
              'featureType': 'water',
              'elementType': 'all',
              'stylers': {
                'hue': '#fff'
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    onReady ({BMap, map}) {
      this.BMap = BMap
      this.map = map
      this.mapGeo = new BMap.Geocoder()
      this.mapInit()
    },
    mapInit (BMap) {
      const {lng, lat} = this.form
      this.setForm(new BMap.Point(lng, lat))
    },
    onQuerySearch (queryString, cb) {
      const {map, BMap} = this
      const local = new BMap.LocalSearch(map, {
        onSearchComplete: (results) => {
          const res = []
          console.log(results, 'results')

          for (let i = 0; i < results.getCurrentNumPois(); i++) {
            const item = results.getPoi(i)
            res.push({ value: `${item.title}, ${item.address}`, point: item.point })
          }
          cb(res)
        }
      })
      local.search(queryString)
    },
    setForm (point) {
      this.mapGeo.getLocation(point, res => {
        console.log(res, 'res')
      })
    },
    onHandleSelect (item) {
      console.log(item, '选择值改变时触发事件')
    },
    locationSuccess ({point, AddressComponent}) {
      console.log(point, AddressComponent)
    }
  }
}
</script>
<style lang="scss">
@import 'scss/mixins/mixin.scss';

@include b(baidu-map) {
  width: 100%;
  height: 500px;
}
</style>
