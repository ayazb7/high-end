'use client'
import Card from '@/components/Card'
import React from 'react'
import agriCard from '@/images/agricultiral.png'
import industrialGoods from '@/images/industrial.png'
import consumerPhoto from '@/images/Consumer.png'
import realstate from '@/images/realstate.png'
import transportation from '@/images/transportation.png'
import electronics from '@/images/electronics.png'
import energy from '@/images/energy.png'
import finance from '@/images/finance.png'

const page = () => {
  return (
    <div>
      <div className='relative flex items-center justify-center text-center flex-col py-16 '>
        <h1 className='text-my_blue text-3xl mt-20 hover:text-4xl hover:underline'>أسواقنا</h1>
        <div className=''></div>
      </div>
      <div className="justify-center hidden md:flex gap-20 w-full px-10 pb-10">
          <Card imageSrc={agriCard} text="المنتجات الزراعية" content='الزراعة وتربية الحيوانات: تجارة المواشي والدواجن والمنتجات الزراعية.' />
          <Card imageSrc={industrialGoods} text="البضائع الصناعية" content='الآلات: المعدات الثقيلة، الآلات الصناعية، والمركبات.
المواد الكيميائية: المواد الكيميائية الخام ومنتجات المواد الكيميائية الصناعية.
مواد البناء: الفولاذ، الأسمنت، والمواد الأخرى المستخدمة في مشاريع البناء والبنية التحتية.' />
          <Card imageSrc={consumerPhoto} text="السلع الاستهلاكية" content='الإلكترونيات: الأجهزة مثل الهواتف الذكية، التلفزيونات، والأجهزة المنزلية.
المنسوجات والملابس: الملابس، الأقمشة، والإكسسوارات الموضة.
الأطعمة والمشروبات: الأطعمة المعلبة، المشروبات، وغيرها من منتجات الأغذية الاستهلاكية.'/>
      </div>
      <div className="md:flex hidden justify-center gap-20 w-full px-10 pb-10">
          <Card imageSrc={electronics} text="التكنولوجيا والإلكترونيات" content='منتجات تكنولوجيا المعلومات: أجهزة الكمبيوتر، معدات الشبكات، والبنية التحتية لتكنولوجيا المعلومات.
الإلكترونيات الاستهلاكية: الهواتف الذكية، الأجهزة اللوحية، والأجهزة الشخصية الأخرى.' />
          <Card imageSrc={realstate} text="العقارات" content='تطوير العقارات: المشاركة في مشاريع تطوير وبناء العقارات.
العقارات الاستثمارية: تجارة العقارات التجارية والسكنية.' />
          <Card imageSrc={finance} text="الخدمات المالية" content='تمويل التجارة: تقديم التمويل للمعاملات التجارية، بما في ذلك خطابات الاعتماد والتمويل التصديري.
التأمين: تقديم منتجات التأمين المتعلقة بالتجارة والشحن.'/>
      </div>
      <div className="md:flex hidden justify-center gap-20 w-full px-10 pb-10">
          <Card imageSrc={energy} text="الطاقة والموارد" content='النفط والغاز: استكشاف، إنتاج، وتجارة النفط والغاز الطبيعي.
التعدين: تجارة المعادن والمعادن المستخرجة من المناجم.' />
          <Card imageSrc={transportation} text="السيارات والنقل" content='المركبات: السيارات، الشاحنات، وأجزاء المركبات.
خدمات اللوجستيات: الشحن، التخزين، وإدارة سلاسل التوريد.' />
          <Card imageSrc={consumerPhoto} text="السلع الأساسية" content='سلع الطاقة: بما في ذلك النفط، الغاز الطبيعي، الفحم، وموارد الطاقة المتجددة.
المعادن: المعادن الثمينة مثل الذهب والفضة، وكذلك المعادن الصناعية مثل النحاس والألمنيوم.'/>
      </div>
      <div className='md:hidden flex flex-col items-center'>
     
          <Card imageSrc={agriCard} text="المنتجات الزراعية" content='الزراعة وتربية الحيوانات: تجارة المواشي والدواجن والمنتجات الزراعية.' />
          <Card imageSrc={industrialGoods} text="البضائع الصناعية" content='الآلات: المعدات الثقيلة، الآلات الصناعية، والمركبات.
المواد الكيميائية: المواد الكيميائية الخام ومنتجات المواد الكيميائية الصناعية.
مواد البناء: الفولاذ، الأسمنت، والمواد الأخرى المستخدمة في مشاريع البناء والبنية التحتية.' />
          <Card imageSrc={consumerPhoto} text="السلع الاستهلاكية" content='الإلكترونيات: الأجهزة مثل الهواتف الذكية، التلفزيونات، والأجهزة المنزلية.
المنسوجات والملابس: الملابس، الأقمشة، والإكسسوارات الموضة.
الأطعمة والمشروبات: الأطعمة المعلبة، المشروبات، وغيرها من منتجات الأغذية الاستهلاكية.'/>
      
      
          <Card imageSrc={electronics} text="التكنولوجيا والإلكترونيات" content='منتجات تكنولوجيا المعلومات: أجهزة الكمبيوتر، معدات الشبكات، والبنية التحتية لتكنولوجيا المعلومات.
الإلكترونيات الاستهلاكية: الهواتف الذكية، الأجهزة اللوحية، والأجهزة الشخصية الأخرى.' />
          <Card imageSrc={realstate} text="العقارات" content='تطوير العقارات: المشاركة في مشاريع تطوير وبناء العقارات.
العقارات الاستثمارية: تجارة العقارات التجارية والسكنية.' />
          <Card imageSrc={finance} text="الخدمات المالية" content='تمويل التجارة: تقديم التمويل للمعاملات التجارية، بما في ذلك خطابات الاعتماد والتمويل التصديري.
التأمين: تقديم منتجات التأمين المتعلقة بالتجارة والشحن.'/>
          <Card imageSrc={energy} text="الطاقة والموارد" content='النفط والغاز: استكشاف، إنتاج، وتجارة النفط والغاز الطبيعي.
التعدين: تجارة المعادن والمعادن المستخرجة من المناجم.' />
          <Card imageSrc={transportation} text="السيارات والنقل" content='المركبات: السيارات، الشاحنات، وأجزاء المركبات.
خدمات اللوجستيات: الشحن، التخزين، وإدارة سلاسل التوريد.' />
          <Card imageSrc={consumerPhoto} text="السلع الأساسية" content='سلع الطاقة: بما في ذلك النفط، الغاز الطبيعي، الفحم، وموارد الطاقة المتجددة.
المعادن: المعادن الثمينة مثل الذهب والفضة، وكذلك المعادن الصناعية مثل النحاس والألمنيوم.'/>
      </div>
    </div>
  )
}

export default page
