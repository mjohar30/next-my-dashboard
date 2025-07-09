'use client'
import { SimpleWidget } from "@/components/dashboard/SimpleWidget";
import { IoCafeOutline } from "react-icons/io5";
import { useAppSelector } from '@/store';


export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counter.count)
  
  const widgetsGridProps = {
    label: 'Counter',
    title: `${count}`,
    subTitle: 'Subtitulo',
    icon: <IoCafeOutline size={50} className="text-blue-500"/>,
    href: '/dashboard/counter'
  }
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget {...widgetsGridProps}/>
    </div>
  )
}