<template>
  <div>
    <div id="container" class="container" />
  </div>
</template>

<script>
import { loadModules } from "esri-loader";
export default {
  name: "IndexView",
  data() {
    return {
      plazaAllList: [
        {
          id: 3452,
          createDate: "2024-06-20T17:21:10",
          updateDate: null,
          ownerId: null,
          path: "0,202,20202",
          parentId: "202",
          plazaNo: "20202",
          plazaName: "高官站集控站",
          plazaType: "2",
          centerNo: "0506",
          lng: "123.903825",
          lat: "41.484589",
          ip: "10.1.31.179",
          tollstationid: null,
          type: null,
          sn: "2",
          coordinateExtent: null,
          childList: null,
          distribute: null,
          plazaNOStartNum: "0",
          plazaNOEventNum: "0",
          plazaNOCarNum: "0",
          plazaNOStartWorkNum: "0",
          plazaTitle: "高官站集控站",
          value: "高官站集控站/20202",
        },
        {
          id: 3454,
          createDate: "2024-06-17T14:13:12",
          updateDate: null,
          ownerId: null,
          path: "0,202,20202,0547",
          parentId: "20202",
          plazaNo: "0547",
          plazaName: "石桥子站",
          plazaType: "3",
          centerNo: null,
          lng: "123.728346",
          lat: "41.462454",
          ip: "10.1.31.179",
          tollstationid: "G1113210050040",
          type: null,
          sn: "2",
          coordinateExtent: null,
          childList: null,
          distribute: null,
          plazaNOStartNum: "8",
          plazaNOEventNum: "0",
          plazaNOCarNum: "0",
          plazaNOStartWorkNum: "0",
          value: "石桥子站/0547",
        },
        {
          id: 3538,
          createDate: "2024-06-19T15:11:02",
          updateDate: null,
          ownerId: null,
          path: "0,207,20701",
          parentId: "207",
          plazaNo: "20701",
          plazaName: "沈阳站集控站",
          plazaType: "2",
          centerNo: "0517",
          lng: "123.462259",
          lat: "41.721076",
          ip: "10.1.31.179",
          tollstationid: null,
          type: null,
          sn: "1",
          coordinateExtent: null,
          childList: null,
          distribute: null,
          plazaNOStartNum: "0",
          plazaNOEventNum: "0",
          plazaNOCarNum: "0",
          plazaNOStartWorkNum: "0",
          plazaTitle: "沈阳站集控站",
          value: "沈阳站集控站/20701",
        },
        {
          id: 3539,
          createDate: "2024-06-25T10:32:08",
          updateDate: null,
          ownerId: null,
          path: "0,207,20701,0541",
          parentId: "20701",
          plazaNo: "0541",
          plazaName: "沈阳站",
          plazaType: "3",
          centerNo: null,
          lng: "123.462259",
          lat: "41.721076",
          ip: "10.1.31.179",
          tollstationid: "S0003210010010",
          type: null,
          sn: "1",
          coordinateExtent: null,
          childList: null,
          distribute: null,
          plazaNOStartNum: "24",
          plazaNOEventNum: "3",
          plazaNOCarNum: "0",
          plazaNOStartWorkNum: "105",
          value: "沈阳站/0541",
        },
        {
          id: 3540,
          createDate: "2024-06-18T10:46:33",
          updateDate: null,
          ownerId: null,
          path: "0,207,20701,0544",
          parentId: "20701",
          plazaNo: "0544",
          plazaName: "桃仙站",
          plazaType: "3",
          centerNo: null,
          lng: "123.532402",
          lat: "41.656948",
          ip: "10.1.31.179",
          tollstationid: "G1113210040030",
          type: null,
          sn: "2",
          coordinateExtent: null,
          childList: null,
          distribute: null,
          plazaNOStartNum: "14",
          plazaNOEventNum: "0",
          plazaNOCarNum: "0",
          plazaNOStartWorkNum: "0",
          value: "桃仙站/0544",
        },
        {
          id: 3551,
          createDate: "2024-06-17T10:46:48",
          updateDate: null,
          ownerId: null,
          path: "0,207,20703",
          parentId: "207",
          plazaNo: "20703",
          plazaName: "长青街站集控站",
          plazaType: "2",
          centerNo: "0519",
          lng: "123.510144",
          lat: "41.728411",
          ip: "10.1.31.179",
          tollstationid: null,
          type: null,
          sn: "3",
          coordinateExtent: null,
          childList: null,
          distribute: null,
          plazaNOStartNum: "0",
          plazaNOEventNum: "0",
          plazaNOCarNum: "0",
          plazaNOStartWorkNum: "0",
          plazaTitle: "长青街站集控站",
          value: "长青街站集控站/20703",
        },
        {
          id: 3552,
          createDate: "2024-06-17T10:46:27",
          updateDate: null,
          ownerId: null,
          path: "0,207,20703,0521",
          parentId: "20703",
          plazaNo: "0521",
          plazaName: "长青街站",
          plazaType: "3",
          centerNo: null,
          lng: "123.510144",
          lat: "41.728411",
          ip: "10.1.31.179",
          tollstationid: "G1501210020040",
          type: null,
          sn: "1",
          coordinateExtent: null,
          childList: null,
          distribute: null,
          plazaNOStartNum: "12",
          plazaNOEventNum: "0",
          plazaNOCarNum: "0",
          plazaNOStartWorkNum: "0",
          value: "长青街站/0521",
        },
        {
          id: 3553,
          createDate: "2024-06-17T10:46:27",
          updateDate: null,
          ownerId: null,
          path: "0,207,20703,0522",
          parentId: "20703",
          plazaNo: "0522",
          plazaName: "雪莲街站",
          plazaType: "3",
          centerNo: null,
          lng: "123.394201",
          lat: "41.709870",
          ip: "10.1.31.179",
          tollstationid: "G1113210030020",
          type: null,
          sn: "2",
          coordinateExtent: null,
          childList: null,
          distribute: null,
          plazaNOStartNum: "13",
          plazaNOEventNum: "0",
          plazaNOCarNum: "0",
          plazaNOStartWorkNum: "0",
          value: "雪莲街站/0522",
        },
        {
          id: 3554,
          createDate: "2024-06-17T10:46:27",
          updateDate: null,
          ownerId: null,
          path: "0,207,20703,0542",
          parentId: "20703",
          plazaNo: "0542",
          plazaName: "古城子南站",
          plazaType: "3",
          centerNo: null,
          lng: "123.571912",
          lat: "41.746768",
          ip: "10.1.31.179",
          tollstationid: "G1501210020020",
          type: null,
          sn: "3",
          coordinateExtent: null,
          childList: null,
          distribute: null,
          plazaNOStartNum: "10",
          plazaNOEventNum: "0",
          plazaNOCarNum: "0",
          plazaNOStartWorkNum: "0",
          value: "古城子南站/0542",
        },
        {
          id: 3555,
          createDate: "2024-06-17T10:46:27",
          updateDate: null,
          ownerId: null,
          path: "0,207,20703,0543",
          parentId: "20703",
          plazaNo: "0543",
          plazaName: "古城子北站",
          plazaType: "3",
          centerNo: null,
          lng: "123.567820",
          lat: "41.748960",
          ip: "10.1.31.179",
          tollstationid: "G1501210020030",
          type: null,
          sn: "4",
          coordinateExtent: null,
          childList: null,
          distribute: null,
          plazaNOStartNum: "10",
          plazaNOEventNum: "0",
          plazaNOCarNum: "0",
          plazaNOStartWorkNum: "0",
          value: "古城子北站/0543",
        },
        {
          id: 3556,
          createDate: "2024-02-29T15:11:02",
          updateDate: null,
          ownerId: null,
          path: "0,207,20703,0540",
          parentId: "20703",
          plazaNo: "0540",
          plazaName: "白塔堡站",
          plazaType: "3",
          centerNo: null,
          lng: "123.414386",
          lat: "41.696810",
          ip: "10.1.31.179",
          tollstationid: "G1113210030030",
          type: null,
          sn: "5",
          coordinateExtent: null,
          childList: null,
          distribute: null,
          plazaNOStartNum: "13",
          plazaNOEventNum: "3",
          plazaNOCarNum: "0",
          plazaNOStartWorkNum: "0",
          value: "白塔堡站/0540",
        },
        {
          id: 3557,
          createDate: "2023-12-15T15:12:44",
          updateDate: null,
          ownerId: null,
          path: "0,207,20703,0539",
          parentId: "20703",
          plazaNo: "0539",
          plazaName: "下河湾站",
          plazaType: "3",
          centerNo: null,
          lng: "123.357920",
          lat: "41.717106",
          ip: "10.1.31.179",
          tollstationid: "G1113210030010",
          type: null,
          sn: "6",
          coordinateExtent: null,
          childList: null,
          distribute: null,
          plazaNOStartNum: "12",
          plazaNOEventNum: "0",
          plazaNOCarNum: "0",
          plazaNOStartWorkNum: "2",
          value: "下河湾站/0539",
        },
      ],
      padList: [
        {
          id: 24,
          plazaNo: "0539",
          deviceId: 1,
          versionCode: "01",
          stafno: "zhangsan",
          stafname: "张三",
          lng: "123.357910",
          lat: "41.717116",
          workHours: "2024-07-04 08:00:00",
          createTime: "2024-07-20 09:18:35",
          ifInScope: "0",
        },
        {
          id: 25,
          plazaNo: "0539",
          deviceId: 2,
          versionCode: "01",
          stafno: "lisi",
          stafname: "李四",
          lng: "123.357920",
          lat: "41.717126",
          workHours: "2024-07-04 08:00:00",
          createTime: "2024-07-20 09:18:37",
          ifInScope: "0",
        },
        {
          id: 26,
          plazaNo: "0539",
          deviceId: 3,
          versionCode: "01",
          stafno: "wangwu",
          stafname: "王五",
          lng: "123.357930",
          lat: "41.717136",
          workHours: "2024-07-04 08:00:00",
          createTime: "2024-07-20 09:18:40",
          ifInScope: "0",
        },
        {
          id: 27,
          plazaNo: "0539",
          deviceId: 4,
          versionCode: "01",
          stafno: "songjaing",
          stafname: "宋江",
          lng: "123.357920",
          lat: "41.717106",
          workHours: "2024-07-04 08:00:00",
          createTime: "2024-07-20 09:18:43",
          ifInScope: "0",
        },
        {
          id: 3,
          plazaNo: "0540",
          deviceId: 5,
          versionCode: "01",
          stafno: "1",
          stafname: "测试1",
          lng: "123.414310",
          lat: "41.696839",
          workHours: "2024-07-31 10:00:00",
          createTime: "2024-07-20 09:18:28",
          ifInScope: "0",
        },
        {
          id: 13,
          plazaNo: "0540",
          deviceId: 6,
          versionCode: "01",
          stafno: "1",
          stafname: "测试2",
          lng: "123.414350",
          lat: "41.696854",
          workHours: "2024-07-31 10:00:00",
          createTime: "2024-07-20 09:18:48",
          ifInScope: "0",
        },
        {
          id: 23,
          plazaNo: "0540",
          deviceId: 7,
          versionCode: "01",
          stafno: "1",
          stafname: "测试3",
          lng: "123.414191",
          lat: "41.696890",
          workHours: "2024-07-31 10:00:00",
          createTime: "2024-07-20 09:18:51",
          ifInScope: "0",
        },
      ],
      argisGraphicMap:{
        Graphic:null,
        Circle:null,
        SimpleFillSymbol:null,
        SimpleLineSymbol:null,
        FeatureLayer:null
      },
      Viewpoint:null,
      argisMap:null,
      argisMapView:null,
      boundaryState:true,
      tollStationState: true, //收费站显示状态
      monumentLayer: null,
      mapPositionImg: require("@/assets/shoufeizhan.png"),
    };
  },
  props: {},
  components: {},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let this_ = this;
      //初始化地图
      loadModules(
        [
          "esri/config",
          "esri/Map",
          "esri/views/MapView",
          "esri/layers/FeatureLayer",
          "esri/layers/MapImageLayer",
          "esri/Basemap",
          "esri/Graphic",
          "esri/layers/GraphicsLayer",
          "esri/symbols/PictureMarkerSymbol",
          "esri/geometry/Point",
          "esri/geometry/Circle",
          "esri/Viewpoint",
          "esri/symbols/SimpleFillSymbol",
          "esri/symbols/SimpleLineSymbol",
        ],
        {
          css: `/dev-api/arcgis_api/esri/themes/light/main.css`,
          url: `/dev-api/arcgis_api/init.js`,
        }
      ).then(
        ([
          config,
          Map,
          MapView,
          FeatureLayer,
          MapImageLayer,
          Basemap,
          Graphic,
          GraphicsLayer,
          PictureMarkerSymbo,
          Point,
          Circle,
          Viewpoint,
          SimpleFillSymbol,
          SimpleLineSymbol,
        ]) => {
          const baseLayer = new MapImageLayer({
            url: `/dev-api/map`,
          });
          const basemap = new Basemap({
            baseLayers: [baseLayer],
          });
          const map = new Map({
            basemap: basemap,
          });
          const view = new MapView({
            container: "container",
            map: map,
            zoom: 20,
            center: [123.451, 41.799],
          });
          this_.Viewpoint = Viewpoint;
          this_.argisMap = map;
          this_.argisMapView = view;
          this_.argisGraphicMap.FeatureLayer = FeatureLayer;
          // this_.argisGraphicMap.GraphicsLayer = GraphicsLayer;
          // this_.argisGraphicMap.Point = Point;
          this_.argisGraphicMap.Graphic = Graphic;
          this_.argisGraphicMap.Circle = Circle;
          this_.argisGraphicMap.SimpleFillSymbol = SimpleFillSymbol;
          this_.argisGraphicMap.SimpleLineSymbol = SimpleLineSymbol;
          this_.initMarkerWindowHandle();
          this_.setMap(this_.plazaAllList, this_.padList);
        }
      );
    },
    // 绘制地图上的收费站、手持机、边界
    setMap(otherList, handsetList) {
      // 绘制边界
      this.initCircle(otherList);
      // // 收费站
      this.initLayer(otherList, this.tollStationState, this.monumentLayer);
    },
    // 绘制边界
    initCircle(receivedData) {
      let that = this;
      // 判断是否显示边界
      let data = that.boundaryState ? receivedData : [];
      // // 围栏部分
      let graphics = [];
      let graphic;
      // 循环遍历传入的数据，生成新的Circle组件
      for (let i = 0; i < data.length; i++) {
        graphic = new that.argisGraphicMap.Circle({
          center: [data[i].lng, data[i].lat], // 圆心坐标
          radius: 20000,// 圆的大小
          radiusUnit: "meters",
          spatialReference: { wkid: 4326 }, // 使用正确的空间参考系统
        });
        // 遍历出的对象存入graphics中
        graphics.push(graphic);
      }
      // 将页面中的graphics数组化
      let allGraphics = that.argisMapView.graphics.toArray();
      // 遍历删除页面中的graphics
      allGraphics.forEach(function (graphic) {
        that.argisMapView.graphics.remove(graphic);
      });
      // 定义线符号
      let lineSymbol = new that.argisGraphicMap.SimpleLineSymbol({
        color: "#8F9CBF", //
        width: 1, // 线条宽度
        style: "dash", // 线条样式
      });
      // 定义填充符号
      let fillSymbol = new that.argisGraphicMap.SimpleFillSymbol({
        color: [237, 246, 255, 0.1], // 透明度为10%
        outline: lineSymbol, // 使用上面定义的线符号作为轮廓
      });
      // 判断是否显示边界（二次确认）
      if (this.boundaryState) {
        // 将新的graphics渲染到页面
        for (let i = 0; i < graphics.length; i++) {
          that.argisMapView.graphics.add(
            new that.argisGraphicMap.Graphic({
              geometry: graphics[i],
              symbol: fillSymbol,
            })
          );
        }
      }
    },
    // new 绘制图层  receivedData = 接受到的数据  displayStatus = 显示状态  layer = 对应图层
    async initLayer(receivedData, displayStatus, layer) {
      let that = this;
      // 删除已有的图标
      await that.clearLayerMarkers(layer);
      // 需要显示的数据处理
      let data = displayStatus ? receivedData : [];
      let graphics = [];
      let graphic;
      for (let i = 0; i < data.length; i++) {
        graphic = that.setGraphic(data[i]);
        graphics.push(graphic);
      }
      const addEdits = {
        addFeatures: graphics,
      };
      // 根据数据重新添加图标
      that.addOrEditLayer(addEdits, layer);
    },
    // new 删除图层中已有的图标
    clearLayerMarkers(layer) {
      let that = this;
      if (layer != null) {
        layer.queryFeatures().then((results) => {
          const deleteEdits = {
            deleteFeatures: results.features,
          };
          that.addOrEditLayer(deleteEdits, layer);
        });
      }
    },
    // new 给Graphic赋值
    setGraphic(data) {
      return new this.argisGraphicMap.Graphic({
        geometry: {
          type: "point",
          latitude: data.lat,
          longitude: data.lng,
        },
        attributes: data,
      });
    },
    // new 在图层中根据数据新增/重新绘制图标
    addOrEditLayer(editData, layer) {
      layer.applyEdits(editData).then((results) => {
        if (results.addFeatureResults.length > 0) {
          let objectIds = [];
          results.addFeatureResults.forEach((item) => {
            objectIds.push(item.objectId);
          });
          layer
            .queryFeatures({
              objectIds: objectIds,
            })
            .then((results) => {});
        }
      });
    },
    // new 绘制图层  receivedData = 接受到的数据  displayStatus = 显示状态  layer = 对应图层
    async initLayer(receivedData, displayStatus, layer) {
      let that = this;
      // 删除已有的图标
      await that.clearLayerMarkers(layer);
      // 需要显示的数据处理
      let data = displayStatus ? receivedData : [];
      let graphics = [];
      let graphic;
      for (let i = 0; i < data.length; i++) {
        graphic = that.setGraphic(data[i]);
        graphics.push(graphic);
      }
      const addEdits = {
        addFeatures: graphics,
      };
      // 根据数据重新添加图标
      that.addOrEditLayer(addEdits, layer);
    },
    // 给Layer赋值
    setMonumentLayer(data) {
      return new this.argisGraphicMap.FeatureLayer(data);
    },
    // ArcGIS 初始化基本图标加弹窗
    initMarkerWindowHandle() {
      // 清除之前的锚点信息
      let this_ = this;
      let tollStationLayer = {
        objectIdField: "ObjectID",
        geometryType: "point",
        source: [], // adding an empty feature collection
        renderer: {
          type: "simple",
          symbol: {
            type: "picture-marker", // autocasts as new PictureMarkerSymbol()
            url: this_.mapPositionImg,
            width: "25px",
            height: "37px",
          },
        }
      };
      this_.monumentLayer = this_.setMonumentLayer(tollStationLayer);
      // 收费站
      this_.argisMap.add(this_.monumentLayer);
    },
  },
};
</script>
<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
}
</style>
