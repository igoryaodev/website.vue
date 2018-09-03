import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Visit from '@/views/Visit'
import ExhibitionMaster from '@/views/exhibition/ExhibitionMaster'
import ExhibitionCurrent from '@/views/exhibition/ExhibitionCurrent'
import ExhibitionPlan from '@/views/exhibition/ExhibitionPlan'
import ExhibitionPast from '@/views/exhibition/ExhibitionPast'
import ExhibitionDetail from '@/views/exhibition/ExhibitionDetail'
import ProgramMaster from '@/views/program/ProgramMaster'
import ProgramCurrent from '@/views/program/ProgramCurrent'
import ProgramPast from '@/views/program/ProgramPast'
import ProgramSpecial from '@/views/program/ProgramSpecial'
import ProgramDetail from '@/views/program/ProgramDetail'
import Shop from '@/views/shop/Shop'
import Calendar from '@/views/calendar/Calendar'
import MediaIndex from '@/views/media/MediaIndex'
import MediaAll from '@/views/media/MediaAll'
import VideoIndex from '@/views/video/VideoIndex'
import VideoAll from '@/views/video/VideoAll'
import VideoExhibition from '@/views/video/VideoExhibition'
import VideoProgram from '@/views/video/VideoProgram'
import VideoSpecial from '@/views/video/VideoSpecial'
import SupportMaster from '@/views/support/SupportMaster'
import SupportIndex from '@/views/support/SupportIndex'
import SupportSponsor from '@/views/support/SupportSponsor'
import SupportGiving from '@/views/support/SupportGiving'
import SupportEvent from '@/views/support/SupportEvent'
import SupportMember from '@/views/support/SupportMember'
import MemberBenefit from '@/views/support/MemberBenefit'
import MemberEvent from '@/views/support/MemberEvent'
import About from '@/views/about/About'
import AboutFounders from '@/views/about/AboutFounders'
import AboutIndex from '@/views/about/AboutIndex'
import AboutLeader from '@/views/about/AboutLeader'
import AboutBoard from '@/views/about/AboutBoard'
import AboutDesign from '@/views/about/AboutDesign'
import JobDetail from '@/views/about/JobDetail'
import JoinUs from '@/views/about/JoinUs'
import FinishApply from '@/views/about/FinishApply'
import ContactMaster from '@/views/contact/ContactMaster'
import ContactPost from '@/views/contact/ContactPost'
import Career from '@/views/about/Career'
import Service from '@/views/Service'
import Privacy from '@/views/Privacy'
import Sitemap from '@/views/Sitemap'
import HomeMaster from '@/views/creative/HomeMaster'
import Home from '@/views/creative/Home'
import NewsList from '@/views/news/NewsList'
import NewsIndex from '@/views/news/NewsIndex'
import ContactIndex from '@/views/creative/contact/ContactIndex'
import Reservation from '@/views/creative/contact/Reservation'
import AboutMaster from '@/views/creative/about/AboutMaster'
import BriefIntro from '@/views/creative/about/BriefIntro'
import EduPhilosophy from '@/views/creative/about/EduPhilosophy'
import TeamIntro from '@/views/creative/about/TeamIntro'
import CommunicateMaster from '@/views/creative/communicate/CommunicateMaster'
import ClassShop from '@/views/creative/communicate/ClassShop'
import TeachService from '@/views/creative/communicate/TeachService'
import ArtActivity from '@/views/creative/ArtActivity'
import WeekendStore from '@/views/creative/WeekendStore'
import ArtMaster from '@/views/creative/art/ArtMaster'
import ArtBecome from '@/views/creative/art/ArtBecome'
import ArtclassDetail from '@/views/creative/art/ArtclassDetail'
import Search from '@/views/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/search/:key',
      name: 'search',
      component: Search,
    },
    {
      path: '/creative',
      name: 'creative',
      component: HomeMaster,
      redirect: {
        name: 'creative-index',
      },
      children: [
        {
          path: 'index',
          name: 'creative-index',
          component: Home,
        },
        {
          path: 'art',
          name: 'art-activity',
          component: ArtActivity,
        },
        {
          path: 'art-class',
          name: 'art-class',
          component: ArtMaster,
          redirect: {
            name: 'artclass-intro',
          },
          children: [
            {
              path: 'intro',
              name: 'artclass-intro',
              component: ArtBecome,
            },
            {
              path: 'detail/:id',
              name: 'art-detail',
              component: ArtclassDetail,
            },
          ],
        },
        {
          path: 'weekend',
          name: 'weekend-store',
          component: WeekendStore,
        },
        {
          path: 'about-us',
          name: 'about-master',
          component: AboutMaster,
          redirect: {
            name: 'brief-intro',
          },
          children: [
            {
              path: 'brief',
              name: 'brief-intro',
              component: BriefIntro,
            },
            {
              path: 'education-framework',
              name: 'edu-framework',
              component: EduPhilosophy,
            },
            {
              path: 'team-introduction',
              name: 'team-intro',
              component: TeamIntro,
            },
            {
              path: 'news',
              name: 'news-list',
              component: NewsList,
            },
            {
              path: 'news/:id',
              name: 'news-index',
              component: NewsIndex,
            },
          ],
        },
        {
          path: 'contact',
          name: 'contact-index',
          component: ContactIndex,
          redirect: {
            name: 'trial',
          },
          children: [
            {
              path: 'free-trial',
              name: 'trial',
              component: Reservation,
            },
          ],
        },
        {
          path: 'exchange',
          name: 'communicate-master',
          component: CommunicateMaster,
          redirect: {
            name: 'teach-service',
          },
          children: [
            {
              path: 'shop',
              name: 'shop-class',
              component: ClassShop,
            },
            {
              path: 'service',
              name: 'teach-service',
              component: TeachService,
            },
          ],
        },
      ],
    },
    {
      path: '/visit',
      name: 'Visit',
      component: Visit,
    },
    {
      path: '/terms',
      name: 'service',
      component: Service,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: Sitemap,
    },
    // 展览
    {
      path: '/exhibitions',
      name: 'exhibition-master',
      component: ExhibitionMaster,
      redirect: {
        name: 'exhibition-current',
      },
      children: [
        {
          path: 'exhibitions-current',
          name: 'exhibition-current',
          component: ExhibitionCurrent,
        },
        {
          path: 'exhibitions-upcoming',
          name: 'exhibition-upcoming',
          component: ExhibitionPlan,
        },
        {
          path: 'exhibitions-past',
          name: 'exhibition-past',
          component: ExhibitionPast,
        },
      ],
    },
    {
      path: '/exhibitions/date/:type/:id',
      name: 'exhibition-detail',
      component: ExhibitionDetail,
    },
    // 支持我们
    {
      path: '/support',
      name: 'support-master',
      component: SupportMaster,
      redirect: {
        name: 'support-index',
      },
      children: [
        {
          path: 'support-index',
          name: 'support-index',
          component: SupportIndex,
        },
        {
          path: 'support-sponsor',
          name: 'support-sponsor',
          component: SupportSponsor,
        },
        {
          path: 'support-giving',
          name: 'support-giving',
          component: SupportGiving,
        },
        {
          path: 'support-event',
          name: 'support-event',
          component: SupportEvent,
        },
        {
          path: 'support-member',
          name: 'support-member',
          component: SupportMember,
        },
        {
          path: 'member-benefit',
          name: 'member-benefit',
          component: MemberBenefit,
        },
        {
          path: 'member-event',
          name: 'member-event',
          component: MemberEvent,
        },
      ],
    },
    // about
    {
      path: '/about',
      name: 'about',
      component: About,
      redirect: {
        name: 'about-index',
      },
      children: [
        {
          path: 'index',
          name: 'about-index',
          component: AboutIndex,
        },
        {
          path: 'founders',
          name: 'about-founders',
          component: AboutFounders,
        },
        {
          path: 'leadership',
          name: 'about-leader',
          component: AboutLeader,
        },
        {
          path: 'careers',
          name: 'careers',
          component: Career,
        },
        {
          path: 'job/:id',
          name: 'job-detail',
          component: JobDetail,
        },
        {
          path: 'apply/:id',
          name: 'join-us',
          component: JoinUs,
        },
        {
          path: 'advisory-board',
          name: 'about-board',
          component: AboutBoard,
        },
        {
          path: 'design-committee',
          name: 'about-design',
          component: AboutDesign,
        },
      ],
    },
    // 申请成功
    {
      path: '/applySuccess',
      name: 'apply-finish',
      component: FinishApply,
    },
    // 联系我们
    {
      path: '/contact',
      name: 'contact',
      component: ContactMaster,
      redirect: {
        name: 'contact-post',
      },
      children: [
        {
          path: 'contact-post',
          name: 'contact-post',
          component: ContactPost,
        },
      ],
    },
    // 公共项目
    {
      path: '/programs',
      name: 'program',
      component: ProgramMaster,
      redirect: {
        name: 'program-current',
      },
      children: [
        {
          path: 'programs-current-upcoming',
          name: 'program-current',
          component: ProgramCurrent,
        },
        {
          path: 'programs-past',
          name: 'program-past',
          component: ProgramPast,
        },
        {
          path: 'programs-special-events',
          name: 'program-special',
          component: ProgramSpecial,
        },
      ],
    },
    {
      path: '/programs/date/:type/:id',
      name: 'program-detail',
      component: ProgramDetail,
    },
    // 商店
    {
      path: '/uccastore',
      name: 'shop',
      component: Shop,
    },
    // 日历
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
    },
     // 媒体区
    {
      path: '/media',
      name: 'media',
      component: MediaIndex,
      redirect: {
        name: 'media-all',
      },
      children: [
        {
          path: 'media-all',
          name: 'media-all',
          component: MediaAll,
        },
      ],
    },
    // 视频
    {
      path: '/video',
      name: 'video',
      component: VideoIndex,
      redirect: {
        name: 'video-all',
      },
      children: [
        {
          path: 'video-all',
          name: 'video-all',
          component: VideoAll,
        },
        {
          path: 'video-exhibition',
          name: 'video-exhibition',
          component: VideoExhibition,
        },
        {
          path: 'video-program',
          name: 'video-program',
          component: VideoProgram,
        },
        {
          path: 'video-special',
          name: 'video-special',
          component: VideoSpecial,
        },
      ],
    },
  ],
  linkActiveClass: 'active',
})
