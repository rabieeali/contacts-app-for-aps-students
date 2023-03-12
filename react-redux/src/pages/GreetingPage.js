import { colors, Typography } from '@mui/material'
import Layout from '../components/Layout'

const GreetingPage = () => {
  return (
    <Layout>
      <Typography variant="h1">You Did It!</Typography>
      <Typography variant="h4">But Read This First 👇</Typography>
      <Typography sx={{ lineHeight: '1.75rem' }} variant="p">
        you are here! which means you made it all the way through the course and here's the last step but the journey won't finish!
        <br />
        <strong>So Ali, where to go now?</strong> well this is a very hard question to answer!
        <br />
        but ask yourself, why did I even started? did you start just to <span className='italic'>know something about web development
        </span> or you wanted to
        <span className='italic'> make your own website</span> or you just  <span className='italic'> wanted to be around people! </span>
        every body has his/her own reasons
        <br />
        well go on ahead! build that project, make that website, post them on social media,let the whole freaking world know you did it!
        it always makes me feel awesome to build an application, to craft something out of magic of code!
        unleash your creativity and remeber that practice makes perfect, never stop learning <br /> as <strong><a target="_blank" rel="noreferrer" href='https://en.wikipedia.org/wiki/B.B._King'> B.B. King</a> </strong> once said
        <blockquote className='italic'> `The beautiful thing about learning is nobody can take it away from you.`</blockquote>
        so never stop leaning, never stop exploring!
        <br />
        and if you ever feel like you need more learning to reach these goals, make sure to talk to your assistants or mentros or even me!
        <br />
        but if you want to do this every day for a living as a job well you have a SHIT TON OF LEARNING! and I really mean it, A SHIT TON!
        nobody is going to recruit you for what you know now!
        and it's kind of a given beacuase first every senior developer knows how to use javascript in DOM! no big deal duh!
        <br />
        second, it seems like every (senior-) developer somehow knows React as well (up to a point)!
        why? beacuase "har irani yek react developer!" 😂
        <br />
        you see react/node (or let's say Javascript) is easy to begin with but the deeper you go the more "I don't wanna do this shit anymore" feeling you'll get
        <br />
        and the third reason is technology changes pretty damn fast! the things you know today might just get deprecated tomorrow
        so you may just stop there and practice and learn a little more!
        start with databases (SQL/NoSQL) or really learn Redux let's say
        <br />
        don't worry! I know it's hard, and it takes time but believe me you will really need them to land your job as web developer
      </Typography>
      <br />
      <br />
      <Typography sx={{ fontSize: "2rem", color: colors.grey['700'] }} variant='p'>One More Quick Thing!</Typography>
      <Typography sx={{ fontSize: "1rem", color: colors.grey['700'] }} variant='p'>
        make sure to star this repo on <a className='text-green'>Github</a>
      </Typography>

    </Layout>
  )
}

export default GreetingPage