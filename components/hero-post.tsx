import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'
import { AiFillDollarCircle } from 'react-icons/ai'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  isPremium: boolean
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  isPremium,
}: Props) => {
  return (
    <section>
      {isPremium && (
        <div className='flex flex-row items-center justify-center'>
          <AiFillDollarCircle className='text-2xl text-black' />
          <p className='text-black'>Premium</p>
        </div>
      )}
      <div className='mb-8 md:mb-16'>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
            <Link as={`/posts/${slug}`} href='/posts/[slug]'>
              <a className='hover:underline'>{title}</a>
            </Link>
          </h3>
          <div className='mb-4 md:mb-0 text-lg'>
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
