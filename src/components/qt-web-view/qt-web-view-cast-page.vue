<template>
  <div class="es-sdk-root-css">
    <!--    <s-title-view class="es-sdk-content-title-css"-->
    <!--                  :text="this.$options.name"/>-->
    <!--    <div class="es-sdk-content-divider-css"/>-->
    <!--    <div class="es-sdk-content-row-css">-->
    <qt-web-view
      @onPageStarted="onPageStarted"
      ref="webview"
      class="es-sdk-web-view-css"
      :layerType="2"
      :ignoreCA="true"
      :focusable="false"
      @onSniffingResult="onSniffingResult"
      @shouldOverrideUrlLoading="onShouldOverrideUrlLoading"
    />
    <es-video-player
      ref="videoPlayer"
      :player-width="800"
      :player-height="500"
      style="position: absolute; right: 0; bottom: 0"
    />
    <!--    </div>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { ESVideoPlayer } from '@extscreen/es3-video-player'
import {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
  ESPlayerType,
  useESPlayer,
  useESPlayerTypeManager,
  ESPlayerOptionType,
  ESPlayerOptionCategory,
} from '@extscreen/es3-player'
import { useESRouter } from '@extscreen/es3-router'
import { QTIWebView } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '网页投屏',
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup() {
    const webview = ref<QTIWebView>()
    const videoPlayer = ref<ESIPlayer>()
    const router = useESRouter()

    const playerTypeManager = useESPlayerTypeManager()
    const player = useESPlayer()
    const playerConfiguration = player.getPlayerConfiguration()

    let videoUrl = {
      url: '',
      bw: 0,
    }
    let audioUrl = {
      url: '',
      bw: 0,
    }

    function onPageStarted(url) {}

    function onESCreate(params) {
      webview.value?.setSniffingEnabled(true)
      // webview.value?.setSniffingRule({
      //   urlRule: {
      //     overrideRules:
      //   }
      // })

      webview.value?.setJavaScriptEnabled(true)
      // 禁止缩放
      webview.value?.setSupportZoom(false)
      // 自适应屏幕大小
      webview.value?.setInitialScale(100)
      webview.value?.setUseWideViewPort(true)
      webview.value?.setLoadWithOverviewMode(true)
      // // 多窗口支持
      webview.value?.setSupportMultipleWindows(false)
      // 浏览器标识
      webview.value?.setUserAgentString(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15'
      )
      // 允许自动播放, 无需用户手势触发
      webview.value?.setMediaPlaybackRequiresUserGesture(false)
      // 允许全屏
      webview.value?.setDomStorageEnabled(true)
      webview.value?.setDatabaseEnabled(true)
      webview.value?.setAllowFileAccess(true)
      webview.value?.setAllowContentAccess(true)
      webview.value?.setDisplayZoomControls(false)
      // 缓存相关
      // webview.value?.disableImageDisplay();
      // webview.value?.setLoadsImagesAutomatically(true);
      webview.value?.setListenEvents(
        'onProgressChanged,onConsoleMessage,onShouldOverrideUrlLoading,onPageStarted,onPageFinished,onReceivedSslError,onReceivedError'
      )
      // 加载投屏网址
      webview.value?.stopLoading()
      // webview.value?.loadUrl('https://www.miguvideo.com/p/detail/957910651') // 咪咕
      // 优酷
      // webview.value?.loadUrl('https://v.youku.com/v_show/id_XNDQ5MDc1NjY5Mg==.html?spm=a2hkl.14919748_WEBCULTURE_JINGXUAN.scg_scroll_1.d_2_play&s=acbad8d3269845f6ba6e&scm=20140719.rcmd.feed.show_acbad8d3269845f6ba6e&scg_id=22915835')
      // webview.value?.loadUrl('https://vku.youku.com/live/ilproom?spm=a2hkl.8165803_WEBLIVE_JINGXUAN.drawer1.d_zj1_4&id=8197393')
      // 快手
      // webview.value?.loadUrl('https://www.kuaishou.com/short-video/3x6vdjyrk2rrfzi?streamSource=hotrank&trendingId=%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E4%BA%8E%E6%9C%A6%E8%83%A7%E5%9D%A0%E6%A5%BC%E4%BC%A0%E9%97%BB&area=brilliantxxunknown')
      // webview.value?.loadUrl('https://live.kuaishou.com/u/jjworld126') // 快手直播
      // 芒果
      // webview.value?.loadUrl('https://www.mgtv.com/b/780988/23488209.html?fpa=1756&fpos=&lastp=ch_show')
      // 哔哩哔哩 常见视频编码：30280、30216、30202、30211    常见音频编码：30032、30232、30112
      // webview.value?.loadUrl('https://www.bilibili.com/video/BV1ovHUzuEQW/?spm_id_from=333.1007.tianma.1-1-1.click')
      // webview.value?.loadUrl('https://www.bilibili.com/video/BV1FR4y1e7XS/?spm_id_from=333.337.search-card.all.click&vd_source=8640a1825e390cee01d49af44a1893c4')
      // webview.value?.loadUrl('https://www.bilibili.com/video/BV1PnbUzNEMe?buvid=XX3954D38EEA2BA109195A982A25FC6F7D490&from_spmid=search.search-result.0.0&is_story_h5=false&mid=ZxLjHkiB6Y2FFDrLYWOg5w%3D%3D&plat_id=114&share_from=ugc&share_medium=android&share_plat=android&share_session_id=3c51e566-a162-4a5d-8603-fb24700b593c&share_source=COPY&share_tag=s_i&spmid=united.player-video-detail.0.0&timestamp=1754280339&unique_k=E6B3asg&up_id=1847644631&vd_source=3d5325415f5d5806fc9ad545ddc65ff3')
      // webview.value?.loadUrl('https://www.bilibili.com/video/BV1ZE411X7vJ/?spm_id_from=333.337.search-card.all.click&vd_source=7303494cd7aa6ac0aa087c335103616d')
      // 抖音
      // webview.value?.loadUrl('https://www.douyin.com/video/7538230700210900262?modeFrom=')
      // webview.value?.loadUrl('https://www.douyin.com/jingxuan?modal_id=7538230700210900262')

      // webview.value?.loadUrl('https://www.ty1010.com/index.php/vod/play/id/90592/sid/5/nid/1.html') // 统一影视，识别出单个地址
      // webview.value?.loadUrl('https://vidhub4.cc/vodplay/271624-1-1.html') // vid hub，识别出2个有效地址
      // webview.value?.loadUrl('https://gimy.ai/eps/346949-10-1.html') // 剧迷，识别出单个地址
      // webview.value?.loadUrl('https://www.eggvo.com/play/115094-0-0.html') // 茶杯狐，识别出单个地址
      // webview.value?.loadUrl('https://www.eggvo.com/play/37878-0-0.html')
      // webview.value?.loadUrl('https://www.dytt8s.com/a/play-64586-1-4.html') // 电影天堂，识别出单个地址
      // webview.value?.loadUrl('https://www.libvio.cc/play/714892764-2-1.html') // lib vio，识别出单个地址 需header和apollo
      // playerTypeManager.setPlayerType(ESPlayerType.ES_PLAYER_TYPE_APOLLO)
      // webview.value?.loadUrl('http://www.pianwuwenhua.com/bf/123590/1-1.html') // 梦宁，识别出2个有效地址
      // webview.value?.loadUrl('https://www.ncat21.com/play/302195-32-2358105.html') // 网飞猫，识别出单个地址 参数有时间戳
      // webview.value?.loadUrl('https://www.0996zp.com/vod/play/118886/1/956025') // 金牌影院，识别出单个地址 参数有auth_key
      // webview.value?.loadUrl('https://m.wbtdy.net/vod-play-id-265059-src-1-num-1.html') // 微博影院，识别出单个地址

      // 央视频
      // webview.value?.loadUrl('https://www.yangshipin.cn/tv/home?pid=600002521')

      // 可可影视
      // webview.value?.loadUrl('https://m.cdblsgg.com/')
      // libvio
      webview.value?.loadUrl('https://www.libvio.cc/')
      // vidhub
      // webview.value?.loadUrl('https://vidhub4.cc/')

      videoPlayer.value?.initialize()
    }

    function getBwWithRegex(url) {
      const match = url.match(/[?&]bw=([^&]*)/)
      return match ? match[1] : null
    }

    function onShouldOverrideUrlLoading(url: string) {
      console.log('onShouldOverrideUrlLoading', url)
      webview.value?.loadUrl(url)
    }

    function onSniffingResult(url: string, headers) {
      console.log('onSniffingResult', url, headers)
      // if (headers.Referer && headers.Referer.includes('bilibili')) {
      //   if (headers.Range && headers.Range.includes('bytes=0-')) {
      //     const bw = Number(getBwWithRegex(url))
      //     if (bw > 0) {
      //       if (videoUrl.bw > 0) {
      //         if (videoUrl.bw < bw) {
      //           const tempUrl = videoUrl.url
      //           const tempBw = videoUrl.bw
      //           videoUrl.url = url
      //           videoUrl.bw = bw
      //           audioUrl.url = tempUrl
      //           audioUrl.bw = tempBw
      //         } else {
      //           audioUrl.url = url
      //           audioUrl.bw = bw
      //         }
      //
      //         let mediaSource: ESMediaSource = {
      //           uri: videoUrl.url,
      //           metadata: {
      //             headers: {
      //               'User-Agent': headers['User-Agent'],
      //               Referer: headers['Referer'],
      //               Origin: headers['Origin'],
      //             },
      //             audios: [
      //               {
      //                 url: audioUrl.url,
      //               },
      //             ],
      //           },
      //         }
      //
      //         playerTypeManager.setPlayerType(ESPlayerType.ES_PLAYER_TYPE_APOLLO)
      //         onPlayerInitialized(mediaSource)
      //       } else {
      //         videoUrl.url = url
      //         videoUrl.bw = bw
      //       }
      //     }
      //     console.log('onSniffingResult2', bw)
      //   }
      // } else if (!url.includes('/youku/')) {
      let mediaSource: ESMediaSource = {
        uri: url,
        metadata: {
          headers: {
            Referer: headers['Referer'],
            Origin: headers['Origin'],
          },
        },
      }
      let options = playerConfiguration.options
      if (!options) {
        options = []
      }

      options.push({
        type: ESPlayerOptionType.ES_PLAYER_OPTION_TYPE_STRING,
        category: ESPlayerOptionCategory.ES_PLAYER_OPTION_CATEGORY_FORMAT,
        name: 'user_agent',
        value: headers['User-Agent'],
      })

      playerConfiguration.options = options
      // playerTypeManager.setPlayerType(ESPlayerType.ES_PLAYER_TYPE_IJK)
      playerTypeManager.setPlayerType(ESPlayerType.ES_PLAYER_TYPE_APOLLO)
      onPlayerInitialized(mediaSource)
      // }
    }

    function onPlayerInitialized(mediaSource: ESMediaSource) {
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource],
      }
      videoPlayer.value?.playMediaSourceList(mediaSourceList)
      videoPlayer.value?.start(0)
    }

    function onBackPressed() {
      videoPlayer.value?.stop()
      videoPlayer.value?.release()
      router.back()
    }

    return {
      webview,
      videoPlayer,
      onESCreate,
      onPageStarted,
      onSniffingResult,
      onShouldOverrideUrlLoading,
      onPlayerInitialized,
      onBackPressed,
    }
  },
})
</script>

<style>
.es-sdk-web-view-css {
  width: 1920px;
  height: 1080px;
}
</style>
