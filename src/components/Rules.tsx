import React, { useState } from 'react';
import { BookOpen, AlertTriangle, Users, Car, Eye, Zap, Shield, Heart, Volume2, Ban } from 'lucide-react';

const Rules: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  const categories = [
    { id: 'general', label: 'General Rules', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'roleplay', label: 'Roleplay Rules', icon: <Users className="w-5 h-5" /> },
    { id: 'whitelist', label: 'Whitelist Rules', icon: <Shield className="w-5 h-5" /> }
  ];

  const rules = {
    whitelist: [
      {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "Age Requirement",
        english: "MUST BE OVER 22 YEARS OLD",
        arabic: "يجب أن تكون فوق 22 سنة"
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: "Voice Changer Prohibition",
        english: "You are not allowed to use a voice changer in the whitelist interview (e.g., Clownfish, Voice Mod, etc.)",
        arabic: "غير مسموح باستخدام مغير الصوت في مقابلة القائمة البيضاء"
      }
    ],
    roleplay: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Powergaming",
        english: "Performing unrealistic or unfair actions that force outcomes without giving others a chance to respond.",
        arabic: "تنفيذ أفعال غير واقعية أو غير عادلة تُجبر الآخرين على نتائج دون منحهم فرصة للرد."
      },
      {
        icon: <Car className="w-6 h-6" />,
        title: "Car Kill",
        english: "Using a vehicle to intentionally harm or kill other players without valid RP.",
        arabic: "استخدام السيارة بشكل متعمد لإيذاء أو قتل لاعبين آخرين بدون سبب منطقي داخل اللعب."
      },
      {
        icon: <Eye className="w-6 h-6" />,
        title: "No Fear RP",
        english: "Failing to show realistic fear for your character's life in dangerous or threatening situations.",
        arabic: "عدم إظهار الخوف الواقعي على حياة شخصيتك في المواقف الخطرة أو المهددة."
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Mass RP",
        english: "Being alone in a certain place doesn't mean you're truly alone. You should take into account that the city's population exceeds two million people, in addition to the presence of cameras in secure areas. This also applies to the police station, the hospital, and shops.",
        arabic: "كونك وحيد في مكان معين لا يعني انك وحيد يجب أن تأخذ بعين الاعتبار ان عدد سكان المدينة يفوق المليونين شخص, إضافة إلى وجود الكاميرات في المناطق الأمنة وهذا ينطبق على و مركز الشرطة و المستشفى والمتاجر."
      },
      {
        icon: <Eye className="w-6 h-6" />,
        title: "Metagaming",
        english: "Using information obtained outside of the game (e.g., voice chat, livestreams, Discord) in character.",
        arabic: "استخدام معلومات من خارج اللعبة (مثل الديسكورد أو البث المباشر) داخل الشخصية."
      },
      {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "Revenge Kill",
        english: "Killing or attacking someone as retaliation after your character has died.",
        arabic: "قتل أو مهاجمة لاعب آخر انتقاماً بعد موت شخصيتك."
      },
      {
        icon: <Ban className="w-6 h-6" />,
        title: "Force RP",
        english: "Imposing roleplay on another player without giving them a chance to respond or consent.",
        arabic: "فرض أحداث أو أفعال على لاعب آخر دون منحه فرصة الرد أو الموافقة."
      },
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Pain RP",
        english: "Failing to roleplay injuries or physical consequences appropriately.",
        arabic: "عدم تمثيل الإصابات أو الأضرار الجسدية بشكل واقعي."
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Mix RP",
        english: "Mixing in-character (IC) and out-of-character (OOC) knowledge, behavior, or language.",
        arabic: "الخلط بين المعلومات والسلوكيات داخل وخارج الشخصية"
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Coherence RP",
        english: "Maintaining consistency and realism in your character's actions, background, and role within the game world.",
        arabic: "الحفاظ على الاتساق والواقعية في تصرفات، خلفية، ودور شخصيتك داخل عالم اللعبة."
      }
    ],
    general: [
      {
        icon: <Ban className="w-6 h-6" />,
        title: "No Insulting or Swearing",
        english: "Insulting and swearing are strictly prohibited, whether in roleplay or on Discord.",
        arabic: "ممنوع السب والشتم سواء في الرول بلاي أو في ديسكورد."
      },
      {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "No Scamming",
        english: "Do not scam other players.",
        arabic: "يمنع الاحتيال على اللاعبين الآخرين."
      },
      {
        icon: <Ban className="w-6 h-6" />,
        title: "No Interference",
        english: "Do not interfere in an ongoing roleplay scenario.",
        arabic: "يمنع التدخل في سيناريو قائم."
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Faction Outfits",
        english: "Wearing police or medic outfits is not allowed unless you are part of the respective faction.",
        arabic: "يمنع ارتداء ملابس الشرطة أو المسعفين إلا إذا كنت جزءًا من الفصيل الخاص بهم."
      },
      {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "Respect for Dead Bodies",
        english: "Destroying, burning, or disrespecting a dead body is strictly prohibited.",
        arabic: "يمنع تمامًا حرق أو تفجير جثة أو إهانتها."
      },
      {
        icon: <Ban className="w-6 h-6" />,
        title: "No Returning After Death",
        english: "If you die in a scenario, you are not allowed to return to it.",
        arabic: "عند موتك أثناء السيناريو، لا يمكنك العودة إليه مرة أخرى."
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Stay in Character",
        english: "You must stay in character at all times, even with friends. Example: If you are a police officer and your friend is a criminal, you must not show favoritism.",
        arabic: "يجب عليك تقمص شخصيتك دائمًا حتى مع أصدقائك. مثال: إذا كنت شرطيًا وصديقك مجرمًا، فلا يجب أن تتساهل معه."
      },
      {
        icon: <Car className="w-6 h-6" />,
        title: "Vehicle Respect",
        english: "Respect the value of your vehicle and drive responsibly.",
        arabic: "يجب عليك تقدير قيمة سيارتك والقيادة بشكل سليم."
      },
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Unconscious Roleplay",
        english: "If you pass out, you cannot speak normally and must roleplay the situation properly.",
        arabic: "في حالة الإغماء، لا يمكنك التحدث بشكل طبيعي ويجب عليك تقمص الحالة بشكل صحيح."
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "NPC Respect",
        english: "Attacking NPCs (bots) for any reason is forbidden. Treat them as regular citizens and follow the laws accordingly.",
        arabic: "ممنوع الاعتداء على الشخصيات غير القابلة للعب (البوتات) لأي سبب كان. يجب اعتبارهم كمواطنين عاديين وتطبيق القوانين عليهم."
      },
      {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "Death Memory Rule",
        english: "After dying, you must forget the people responsible for your death, but you may remember the scenario itself.",
        arabic: "عند الموت، يجب عليك نسيان الأشخاص المتسببين في ذلك، لكن يمكنك تذكر السيناريو."
      },
      {
        icon: <Ban className="w-6 h-6" />,
        title: "No OOC Discussion",
        english: "Discussing out-of-character (OOC) topics or hinting at them in RP is strictly forbidden.",
        arabic: "يمنع منعًا باتًا التحدث عن الأمور الخارجة عن الرول بلاي أو التلميح لها."
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "No Cheating",
        english: "No Cheating or Exploiting Bugs",
        arabic: "ممنوع الغش أو استغلال الأخطاء البرمجية."
      },
      {
        icon: <Ban className="w-6 h-6" />,
        title: "No Griefing",
        english: "No Griefing",
        arabic: "ممنوع التخريب."
      },
      {
        icon: <Volume2 className="w-6 h-6" />,
        title: "Hospital Music Rule",
        english: "You do not have the right to use a boombox or play music in or around the hospital.",
        arabic: "لا يحق لك استخدام جهاز البومبوكس أو تشغيل الموسيقى في : المستشفى أو حول المستشفى."
      }
    ]
  };

  return (
    <section id="rules" className="relative py-24 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-yellow-900/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Server Rules
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Read and understand our rules to ensure a great roleplay experience for everyone
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-red-600 to-yellow-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/50'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Rules Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {rules[activeCategory as keyof typeof rules].map((rule, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/10"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-xl border border-red-500/30">
                  <div className="text-red-400">
                    {rule.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {rule.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-red-500">
                      <p className="text-gray-200 leading-relaxed">
                        <span className="text-red-400 font-semibold">EN:</span> {rule.english}
                      </p>
                    </div>
                    <div className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-gray-200 leading-relaxed" dir="rtl">
                        <span className="text-yellow-400 font-semibold">AR:</span> {rule.arabic}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rules Footer */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-900/40 to-yellow-900/40 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
            <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              Important Notice
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Breaking any of these rules may result in warnings, kicks, or permanent bans. 
              All rules apply to both in-game and Discord interactions. 
              <span className="text-red-400 font-semibold"> Ignorance of the rules is not an excuse.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;