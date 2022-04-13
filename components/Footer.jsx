import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/footer.module.scss'

export default function Footer() {
  return (
    <>
      <div>
        <Link href='/' passHref>
          <Image
            src="/global/se-27_footer_logo.svg" 
            width={338}
            height={107}
            alt="se-27_logo"
            layout='intrinsic'
          />
        </Link>

        <Link href='https://twitter.com/siino_webdev' passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image 
            src="/global/twitter_icon.svg" 
            width={35}
            height={35}
            alt="twitter_icon"
            layout='intrinsic'
            />
          </a>
        </Link>
      </div>
    </>
  )
}