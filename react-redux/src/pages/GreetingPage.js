import { Button, colors, Typography, Link as MuiLink } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const GreetingPage = () => {
    return (
        <Layout>
            <Typography sx={{ textAlign: 'center' }} color='red' variant="h1">You Did It!</Typography>
            <br />
            <Typography variant="h4">But Read <strong className='text-red'>Every Line</strong> Of This First 👇</Typography>
            <br />
            <Typography sx={{ lineHeight: '1.75rem' }} variant="p">
                you are here! which means you made it all the way through the course and here's the last step but the journey won't finish!
                <br />
                <strong>So <MuiLink href='https://www.linkedin.com/in/alirbi/' target='_blank' rel='noreferrer'>Ali</MuiLink>, where to go now?</strong> well this is a very hard question to answer!
                <br />
                but ask yourself, why did I even start this course? did you start just to <span className='italic'>know something about web development
                </span> or you wanted to
                <span className='italic'> make your own website</span> or you just  <span className='italic'> wanted to be around people! </span>
                everybody has his/her own reasons
                <br />
                well go on ahead! start that project, make that website, post them on social media,let the whole freaking world know you did it!
                (it always makes me feel awesome to build an application, to craft something out of magic of code!)
                unleash your creativity and remeber that practice makes perfect, never stop learning.
                <br />
                as <strong><MuiLink target="_blank" rel="noreferrer" href='https://en.wikipedia.org/wiki/B.B._King'> B.B. King</MuiLink> </strong> once said
                <blockquote style={{ fontSize: '1.3rem' }} className='italic'> `The beautiful thing about learning is nobody can take it away from you.`</blockquote>
                so never stop learning, never stop exploring!
                <br />
                and if you ever feel like you need more learning to reach these goals, make sure to talk to your assistants or mentros or even me!
                <br />
                but if you want to do this every day for a living as a job well you have a SHIT TON OF LEARNING! and I mean it word by word, A-FUCKING-SHIT-TON!
                nobody is going to recruit you for what you know now!
                and it's kind of a given becuase<br /> first, every senior developer knows how to use javascript at least in the DOM! no big deal duh!
                <br />
                second, it seems like every (senior-) developer somehow knows React as well! (up to a point)
                why? because "har irani yek react developer!" 😂 <br />if something goes viral, everyone wants to learn it
                <br />
                you see react/node (or let's say Javascript) is easy to begin with but the deeper you go, the more "I don't wanna do this shit anymore" feeling you'll get
                <br />
                and the third reason is technology changes pretty damn fast! the things you know today might just get deprecated tomorrow
                <br />
                so what to do finally Ali?
                <br />
                you may just stop there and practice and learn a little more!
                start with databases (SQL/NoSQL) or really learn Redux <br />or maybe get really good at javascript (this is what I recommend)
                <br />
                don't worry! I know it's hard, and it takes time but believe me you will really need them to land your job as a web developer
                and more importantly it increases the chance of getting the job for you
            </Typography>
            <br />
            <br />
            <Typography sx={{ fontSize: "2rem", color: colors.grey['700'] }} variant='p'>One More Quick Thing!</Typography>
            <br />
            <br />
            <Typography sx={{ fontSize: "1rem", color: colors.grey['700'], padding: '8rem 0' }} variant='p'>
            there is <MuiLink href='https://github.com/rabieeali/react-projects' target='_blank' rel="noreferrer"> a bonus react project </MuiLink> with <strong>Typescript and Context</strong> for you and also a couple of other projects with react like a <strong>todo-list with redux toolkit </strong>
            make sure to start it ⭐</Typography>
            <Box>

                <Button
                    component={Link}
                    to='/'
                    sx={{ color: 'white', margin: '3rem 0' }}
                    fullWidth
                    variant='contained'
                >
                    Let's Get Started
                </Button>
            </Box>
        </Layout>
    )
}

export default GreetingPage