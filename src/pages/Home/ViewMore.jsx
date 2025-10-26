import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../Nav/Nav";
import AdminPanels from "../../assets/AdminPanels.png";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import AdminApps from "../../assets/AdminApps.png";
import Aboutuspic from "../../assets/Aboutuspic.png";
import UserApps from "../../assets/UserApps.png";
import Pos from "../../assets/Pos.png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import Websiteorderonlines from "../../assets/Websiteorderonline.png";
import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowDownLeft } from "react-icons/fi";
import { BiSolidDownArrow } from "react-icons/bi";
import { GiStaryu } from "react-icons/gi";
import { BsDatabaseFillLock } from "react-icons/bs";
import logo from "../../assets/logo.png"
import wego from "../../assets/wego.png"
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import lab from '../../assets/lab.jpg'
import homenew from '../../assets/homenew.png'
import com from '../../assets/com.png'
import { motion } from "framer-motion";

const ViewMore = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  const cards = [
    {
      icon: "🍽️",
      title: "المطبخ",
      desc: "يستقبل الطلبات الخاصة بالأكلات مباشرة مع تفاصيلها، لتبدأ عملية التحضير فورًا بدون انتظار.",
      color: "from-rose-100 to-rose-50",
    },
    {
      icon: "☕",
      title: "قسم المشروبات",
      desc: "يعرض الطلبات التي تحتوي على مشروبات فقط، لتجهيزها بسرعة بالتوازي مع باقي الأقسام.",
      color: "from-amber-100 to-yellow-50",
    },
    {
      icon: "🧩",
      title: "لوحة التحكم (Admin Panel)",
      desc: "العقل المنظم للنظام — يوزع الطلبات تلقائيًا، يتابع الحالة، ويقدّم إحصائيات لحظية عن الأداء.",
      color: "from-sky-100 to-cyan-50",
    },
  ];
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-gray-50 to-white text-center ">
      <Nav />

   <section
  className="flex flex-col md:flex-row items-center justify-between gap-12 py-16 px-6 md:px-20 bg-gray-50"
  data-aos="fade-up"
>  <div className="w-full mb-4 md:hidden text-center">
    <h2 className="text-one text-4xl md:text-5xl font-extrabold mb-2">
      أحنا مين
    </h2>
    <div className="w-20 h-1 bg-one mx-auto rounded-full"></div>
  </div>

  <div className="md:w-1/2 flex justify-center md:justify-start relative">
    <div className="flex items-center  flex-wrap gap-6 relative">
      <img
        src={logo}
        alt="Food2Go Logo"
        className="w-32 md:w-60 drop-shadow-md hover:scale-105 transition-transform duration-300"
      />
      <img
        src={wego}
        alt="Wego Station Logo"
        className="w-36 md:w-60 drop-shadow-md hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="absolute -z-10 w-56 h-56 bg-one/10 rounded-full blur-3xl top-10 right-10"></div>
  </div>

  {/* النص */}
  <div className="md:w-1/2 text-center md:text-right space-y-6">
    <h2 className="hidden md:block text-one text-4xl md:text-5xl font-extrabold mb-2">
      أحنا مين
    </h2>
    <div className="hidden md:block w-20 h-1 bg-one rounded-full mb-4"></div>

    <p
      dir="rtl"
      className="text-seven text-lg md:text-xl leading-loose text-justify"
    >
      نحن{" "}
      <span className="text-one font-semibold">Food2Go</span>، أحد مشاريع{" "}
      <span className="text-one font-semibold">Wego Station</span>، شركة
      برمجيات رائدة بدأت رحلتها عام{" "}
      <span className="text-one font-extrabold">2010</span> 
      في السوقين المصري
      والعربي.
       بخبرتنا الطويلة وشغفنا بالتقنية، نصنع حلولًا ذكية ومبتكرة
      تواكب العصر وتلبي احتياجات المستقبل.
    </p>
  </div>
</section>


      <section
        className="flex flex-col items-center justify-center py-16 px-6 md:px-0 bg-gray-50"
        data-aos="fade-up"
      >
        <h2 className="text-one text-4xl md:text-5xl font-extrabold mb-6">
          خدماتنا
        </h2>
        <p
          dir="rtl"
          className="text-seven text-xl md:text-2xl leading-relaxed max-w-5xl  mb-10"
        >
          في <span className="font-semibold text-one">Food2Go</span> بنقدّم باقة
          متكاملة من حلول المطاعم والإدارة، مصمّمة لتسهّل عليك كل تفاصيل التشغيل
          اليومي. من أنظمة الطلبات والتوصيل الذكية، لإدارة المخزون والموظفين،
          و وصولاً إلى تقارير دقيقة تساعدك تاخد قرارات أسرع وأنجح.
        </p>

        <div className="max-w-5xl space-y-6 text-gray-800 text-lg leading-relaxed">
          <div
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            data-aos="fade-left"
          >
            <h3 className="font-bold text-one text-2xl mb-2">
              🔹 حل متكامل للطلب أونلاين
            </h3>
            <p>
              بنقدّم نظام متكامل بيضم موقع إلكتروني وتطبيق موبايل خاص بمطعمك،
              متصل بلوحة تحكم (Admin Dashboard) سهلة الاستخدام تقدر تدير منها
              الطلبات، العملاء، والمنيو في مكان واحد.
            </p>
            <div className="flex justify-around flex-wrap gap-2 py-4">
              <img  src={AdminPanels} />
              <img src={AdminApps} />
            </div>
          </div>

          <div
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            data-aos="fade-left"
          >
            <h3 className="font-bold text-one text-2xl mb-2">
              🔹 ربط النظام بصفحتك على فيسبوك
            </h3>
            <p>
              بنربط نظام الطلبات مباشرة بصفحتك على فيسبوك، علشان عملاؤك يقدروا
              يطلبوا بسهولة من خلال السوشيال ميديا بدون ما يخرجوا من المنصة.
            </p>
           <div className="flex flex-col  flex-wrap gap-2 py-4">
              <img src={one} />
<div className="flex justify-center">
                <BiSolidDownArrow className="text-one text-4xl"/>
</div>              <img src={two} />
            </div>
          </div>

          <div
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            data-aos="fade-left"
          >
            <h3 className="font-bold text-one text-2xl mb-2">
              🔹 توحيد استقبال الطلبات في مكان واحد
            </h3>
            <p>
              كل طلباتك – سواء من الموقع، التطبيق، أو السوشيال ميديا – بتوصلك في
              لوحة إدارة موحدة، علشان تتابع الأداء، تحلل البيانات، وتطوّر شغلك
              بسرعة ودقة.
            </p>
            {/* <div className="flex justify-around flex-wrap gap-2 py-4">
              <img src={Websiteorderonlines} />
            </div> */}
             
    <section
      className=" py-16 px-6 md:px-20 text-center"
      data-aos="fade-up"
    >
     
      <div className="flex flex-wrap justify-center items-center gap-6">
        <a
          href="#"
          className="flex items-center gap-3 bg-one text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <FaApple className="text-3xl" />
          <div className="text-left">
            <p className="text-base font-semibold">App Store</p>
          </div>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 bg-one  text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <FaGooglePlay className="text-3xl" />
          <div className="text-left">
            <p className="text-base font-semibold">Google Play</p>
          </div>
        </a>
      </div>
    </section>
          </div>
        </div>
      </section>
      {/*  */}
 <section
  className="flex flex-col items-center justify-center py-16 px-6 md:px-20 bg-gray-50 text-center"
  data-aos="fade-up"
>
  {/* العنوان الرئيسي */}
  <h2 className="text-one text-4xl md:text-5xl font-extrabold mb-6">
    بيفيدك في ايه ؟
  </h2>

  {/* الفقرة الأولى */}
  <p
    data-aos="fade-right"
    dir="rtl"
    className="text-seven text-lg md:text-2xl leading-relaxed max-w-4xl mb-6"
  >
    <span className="font-semibold text-one">البراندينج (Branding)</span> النهارده
    بتعلن إن عندك تطبيق موبايل{" "}
    <span className="font-semibold text-one">mobile App</span> خاص بيك، وده
    بيقوّي صورتك قدام العملاء وبيخليك تبان كشركة منظمة وحديثة.
  </p>

  {/* الفقرة الثانية */}
  <p
      data-aos="fade-right"

    dir="rtl"
    className="text-seven text-lg md:text-2xl leading-relaxed max-w-4xl mb-10"
  >
    <span className="font-semibold text-one">تسهيل الطلبات الأونلاين</span> —
    في شريحة كبيرة من الناس مش بتحب أو مش بتقدر تتكلم في التليفون، فالتطبيق
    بيسهّل عليهم الطلب بسهولة من غير مكالمة.
  </p>

  {/* عنوان القسم الثاني */}
  <h2     data-aos="fade-down"

className="text-one text-4xl md:text-5xl font-extrabold mb-4">
    الشريحة دي متقسّمة لنوعين
  </h2>

  {/* الأسهم */}
  <div className="hidden md:flex items-center justify-center gap-8 py-4 text-one">
    <FiArrowDownLeft className="text-5xl" />
    <FiArrowDownRight className="text-5xl" />
  </div>

  {/* القسمين */}
  <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mt-6">
    <div className="flex-1 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
<div className=" flex md:hidden items-center justify-center gap-8 py-4 text-one"     data-aos="flip-left"
>
    <BiSolidDownArrow className="text-5xl" />
  </div>
       <p
        dir="rtl"
        className="text-seven text-lg md:text-2xl leading-relaxed mb-6"
      >
        ناس  تانية بتحب التطبيقات وبتنزل الموبايل أب عشان تطلب منه مباشرة.
      </p>
      <div className="flex justify-center">
        <img
                    data-aos="flip-left"

          src={Aboutuspic}
          alt="Website"
          className="w-100 h-100 rounded-xl"
        />
      </div>
    
    </div>

    {/* النوع الثاني */}
    <div className="flex-1 bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
    <div className=" flex md:hidden items-center  justify-center gap-8 py-4 text-one">
    <BiSolidDownArrow className="text-5xl" />
  </div>
      <p
        dir="rtl"
        className="text-seven text-lg md:text-2xl leading-relaxed mb-6"
      >
       
         ناس  مش بتحب التطبيقات، لكن عايزة تطلب أونلاين، وده بنوفره من
        خلال الموقع الإلكتروني (Website).
      </p>
      <div className="flex justify-center"     data-aos="flip-left"
>
    <img
            data-aos="flip-left"

          src={homenew}
          alt="Mobile App"
          className="w-150 h-100 rounded-xl object-contain"
        />
       
      </div>
    </div>
  </div>
 
 <p
    dir="rtl"
    className="text-seven mt-4 md:mt-8 text-lg md:text-2xl leading-relaxed max-w-4xl mb-10"
  >
  عشان كده إحنا عاملين  <span className=" font-bold text-one">Mobile App &  Website</span> 
مع بعض، عشان نقدر نستهدف كل العملاء ونغطي كل الفئات.
وفي النهاية، انت بتستفيد إنك:  </p>

<div dir="rtl" className="flex flex-col gap-4 mt-6">
  {/* العنصر الأول */}
  <div className="flex items-center gap-4 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
    <GiStaryu className="text-one text-5xl md:text-6xl flex-shrink-0 animate-pulse" />
    <span className="text-seven text-xl md:text-3xl leading-snug">
      بتقوّي البراند بتاعك
    </span>
  </div>

  {/* العنصر الثاني */}
  <div className="flex items-center gap-4 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
    <GiStaryu className="text-one text-5xl md:text-6xl flex-shrink-0 animate-pulse" />
    <span className="text-seven text-xl md:text-3xl leading-snug">
      وبتسهّل على نفسك استقبال الطلبات الأونلاين من غير ما تسقط أي Order.
    </span>
  </div>
</div>

</section>

      {/*  */}
      <section
  className="py-16 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white text-center"
  data-aos="fade-up"
>
  {/* الفقرة التوضيحية */}
  <h2 className="text-one text-4xl md:text-5xl font-extrabold mb-8">
    بنوفّرلك أكتر مما تتخيل 🚀
  </h2>

  <p
    dir="rtl"
    className="text-seven text-lg md:text-2xl leading-relaxed max-w-5xl mx-auto mb-10"
  >
    بنوفّرلك في النسبة اللي كنت بتدفعها للتطبيقات الخارجية أو المنصات التانية،
    وبنخلي العملاء دول يطلبوا مباشرة من عندك.
  </p>

  {/* قسم "إزاي ده بيحصل" */}
  <div className="bg-white shadow-md rounded-2xl p-8 max-w-4xl mx-auto mb-14 ">
    <h3 className="text-one text-3xl md:text-4xl font-bold mb-6">
      إزاي ده بيحصل؟
    </h3>
    <p
      dir="rtl"
      className="text-seven text-lg md:text-2xl leading-relaxed mb-6 blur-sm" 
    >
      بنقدملك <span className="font-semibold text-one">Flyer مخصص</span> بتحطه
      مع كل Order، عليه QR أو لينك مباشر للتطبيق أو الموقع بتاعك، فبكده العميل
      المرة الجاية يطلب منك مباشرة.
    </p>
    <a href="https://www.facebook.com/Food2gopro?rdid=P5l4iSXumKS17DUb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AGKyX1gJy%2F#" className="text-one text-2xl">View</a>
    <p
      dir="rtl"
      className="text-seven text-lg md:text-2xl leading-relaxed"
    >
      عندنا كمان نظام{" "}
      <span className="font-semibold text-one">POS (نقطة بيع)</span> تقدر تفتحه
      من التابلت أو الويب.
    </p>
  </div>

  {/* قسم مميزات POS */}
  <h3 className="text-one text-3xl md:text-4xl font-extrabold mb-10">
    مميزات الـ POS 💡
  </h3>

<div className="flex flex-col lg:flex-row gap-10 p-10 bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-3xl my-8 shadow-lg backdrop-blur-md">
  {/* Tablet / iPad Section */}
  <div className="flex-1 bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-one mb-4 tracking-wide">Tablet / iPad</h2>
      <div className="overflow-hidden rounded-2xl bg-white">
        <img
          className="w-full h-[400px] object-contain md:object-cover hover:scale-105 transition-transform duration-500 bg-white"
          src={lab}
          alt="Tablet or iPad view"
        />
      </div>
    </div>
  </div>

  {/* Website Section */}
  <div className="flex-1 bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-one mb-4 tracking-wide">Website</h2>
      <div className="overflow-hidden rounded-2xl bg-white">
        <img
          className="w-full h-[400px] object-contain md:object-cover hover:scale-105 transition-transform duration-500 bg-white"
          src={com}
          alt="Website view"
        />
      </div>
    </div>
  </div>
</div>





  <div
  className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto py-16 px-6 md:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl shadow-inner"
  dir="rtl"
>
  {/* الميزة 1 */}
  <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
    <div className="text-one text-6xl mb-4">💻</div>
    <h4 className="text-one text-2xl font-bold mb-4 tracking-wide">سهولة الاستخدام</h4>
    <p className="text-gray-600 text-lg leading-relaxed">
      تم تصميم النظام ليكون بديهي وسهل لأي مستخدم، حتى لو أول مرة يتعامل مع
      برامج إلكترونية. كل خطوة واضحة، والواجهة مرتبة وبسيطة بدون أي تعقيد.
    </p>
  </div>

  {/* الميزة 2 */}
  <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
    <div className="text-one text-6xl mb-4">⚡</div>
    <h4 className="text-one text-2xl font-bold mb-4 tracking-wide">سرعة الأداء</h4>
    <p className="text-gray-600 text-lg leading-relaxed">
      النظام خفيف جدًا ويعمل بسرعة عالية حتى مع ضغط البيانات. 
      يساعدك في إنجاز المهام اليومية في وقت أقل، ويمنع التأخير أثناء فترات الذروة.
    </p>
  </div>

  {/* الميزة 3 */}
  <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
    <div className="text-one text-6xl mb-4">🔒</div>
    <h4 className="text-one text-2xl font-bold mb-4 tracking-wide">أمان متكامل</h4>
    <p className="text-gray-600 text-lg leading-relaxed">
      نولي خصوصيتك أهمية قصوى. جميع البيانات تُخزّن وتُشفّر وفق أحدث معايير الأمان،
      بحيث تكون معلوماتك ومعلومات عملائك في أيدي أمينة على مدار الساعة.
    </p>
  </div>
</div>

  {/* الفقرة الختامية */}
  <p
    dir="rtl"
    className="text-seven text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mt-14"
  >
    وكل ده بتكلفة بسيطة جدًا مقارنة بالخدمات اللي بتقدّمها التطبيقات أو المنصات التانية.
  </p>
</section>

{/*  */}
 <section
      className="relative py-24 px-6 md:px-20 text-center overflow-hidden"
      dir="rtl"
    >
      {/* خلفية زخرفية ناعمة */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-one/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl" />
      </div>

      {/* العنوان والوصف */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-one text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-snug"
      >
        نظام ذكي يربط كل أقسام مطعمك بانسيابية 🤖
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-seven text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto mb-14 text-center md:text-right"
      >
        بمجرد ما العميل يطلب أونلاين من تطبيق المطعم، النظام بيتعامل مع الطلب بذكاء
        ويوجه كل جزء منه تلقائيًا للقسم المختص — بدون أي تدخل يدوي أو تأخير.
      </motion.p>

      {/* البطاقات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-right">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${card.color} rounded-3xl shadow-md hover:shadow-2xl p-10 transition-transform duration-500 hover:-translate-y-2`}
          >
            <div className="text-6xl mb-5 animate-[bounce_4s_ease-in-out_infinite]">
              {card.icon}
            </div>
            <h3 className="text-one text-2xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* النقاط المميزة */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20"
      >
        <ul className="text-seven text-lg md:text-2xl leading-relaxed space-y-4 text-right">
          {[
            "كل قسم بيشتغل في الجزء الخاص بيه بوضوح وتنظيم بدون ارتباك.",
            "الطلبات بتتنفذ أسرع وبدقة أعلى بفضل التوزيع الذكي.",
            "العميل بيحس بتجربة احترافية وسلسة من أول نقرة حتى استلام الطلب.",
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-green-500 text-2xl mt-1">✅</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* الفقرة الختامية */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-24 max-w-4xl mx-auto space-y-10"
      >
        <p className="text-seven text-xl md:text-2xl leading-relaxed">
          نظامنا مش بس بينقل الطلبات، لكنه ينظمها بذكاء، وبيخلي الأقسام تشتغل بتناغم
          كامل كأنها فريق واحد 💡
        </p>

        <p className="text-one text-3xl md:text-4xl font-extrabold leading-snug">
          📲 خلي مطعمك في جيب العميل!
        </p>

        <p className="text-seven text-lg md:text-2xl leading-relaxed">
          من خلال تطبيقك الخاص، تقدر تتابع الطلبات لحظة بلحظة، تقدم عروض حصرية،
          وتخلي تجربة العميل أسهل وأسرع من أي وقت 🚀
        </p>

        <div className="mt-10">
          <button className="px-10 py-4 bg-gradient-to-r from-one via-one/80 to-black text-white text-xl font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            اطلب تجربة النظام الآن
          </button>
        </div>
      </motion.div>
    </section>



    </div>
  );
};

export default ViewMore;
