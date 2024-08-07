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
      <div className='relative flex items-center justify-center text-center felx-col py-16 '>
        <h1 className='text-my_blue text-3xl mt-20 hover:text-4xl hover:underline' >Our Markets</h1>
        <div className=''></div>
      </div>
      <div className="flex justify-center gap-20 w-full px-10 pb-10">
          <Card imageSrc={agriCard} text="Agricultural products" content='Farming and livestock: Trading in livestock, poultry, and agricultural products.' />
          <Card imageSrc={industrialGoods} text="Industrial Goods" content='Machinery: Heavy equipment, industrial machinery, and vehicles.
Chemicals: Both raw chemicals and industrial chemical products.
Construction materials: Steel, cement, and other materials used in building and infrastructure projects.' />
          <Card imageSrc={consumerPhoto} text="Consumer Goods" content='Electronics: Devices like smartphones, televisions, and household appliances.
Textiles and Apparel: Clothing, fabrics, and fashion accessories.
Food and Beverages: Packaged foods, beverages, and other consumer food products.'/>
      </div>
      <div className="flex justify-center gap-20 w-full px-10 pb-10">
          <Card imageSrc={electronics} text="Technology and Electronics" content='IT products: Computers, networking equipment, and other IT infrastructure.
Consumer electronics: Smartphones, tablets, and other personal devices.' />
          <Card imageSrc={realstate} text="Real Estate" content='Property development: Involvement in real estate development and construction projects.
Investment properties: Trading in commercial and residential properties.' />
          <Card imageSrc={finance} text="Financial Services" content='Trade finance: Providing financing for trade transactions, including letters of credit and export financing.
Insurance: Offering insurance products related to trade and shipping..'/>
      </div>
      <div className="flex justify-center gap-20 w-full px-10 pb-10">
          <Card imageSrc={energy} text="Energy and Resources" content='Oil and gas: Exploration, production, and trading of oil and natural gas.
Mining: Trading in minerals and metals extracted from mines.' />
          <Card imageSrc={transportation} text="Automobiles and Transportation" content='Vehicles: Cars, trucks, and parts for vehicles.
Logistics services: Shipping, warehousing, and supply chain management.' />
          <Card imageSrc={consumerPhoto} text="Commodities" content='Energy commodities: Including oil, natural gas, coal, and renewable energy resources.
Metals: Precious metals like gold and silver, as well as industrial metals like copper and aluminum..'/>
      </div>
    </div>
  )
}

export default page