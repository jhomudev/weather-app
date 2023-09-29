import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Variants, motion } from 'framer-motion'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
  custom: number,
  headerContent: ReactNode,
  bodyContent: ReactNode,
  footerContent?:ReactNode
}

const CardTodayWeather:FunctionComponent<Props> = ({ custom, headerContent, bodyContent, footerContent }) => {
  const variants: Variants = {
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: 'tween'
      }
    }),
    hidden: {
      opacity: 0,
      scale: 0.5
    }
  }

  return (
    <motion.div
      variants={variants}
      custom={custom}
      initial='hidden'
      animate='visible'
      className='min-h-[170px] w-full lg:w-[48%] '
    >
      <Card className='h-full px-5 bg-my_blue-smooth text-my_white-light'>
        <CardHeader className='justify-center font-semibold'>{headerContent}</CardHeader>
        <CardBody className='flex flex-row justify-center  items-center text-4xl'>{bodyContent}</CardBody>
        {
          footerContent &&
            <CardFooter className='flex justify-center items-center gap-2'>{footerContent}</CardFooter>
        }
      </Card>
    </motion.div>
  )
}
export default CardTodayWeather
