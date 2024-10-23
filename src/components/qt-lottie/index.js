import qt_lottie_start_page from './qt-lottie-start-page';
import qt_lottie_network_page from './qt-lottie-network-page';
import qt_lottie_local_page from './qt-lottie-local-page';
import qt_lottie_event_page from './qt-lottie-event-page';

const QTLottiePageList = {
    qt_lottie_start_page: {
        name: '使用初探',
        component: qt_lottie_start_page,
    },
    qt_lottie_event_page: {
        name: '事件',
        component: qt_lottie_event_page,
    },
    qt_lottie_network_page: {
        name: '网络资源',
        component: qt_lottie_network_page,
    },
    qt_lottie_local_page: {
        name: '本地资源',
        component: qt_lottie_local_page,
    },
};
export default QTLottiePageList;
