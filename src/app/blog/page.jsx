// 'use client'

// import Footer from "@/components/Footer"



// export default function ComingSoonPage() {

//   return (
//     <>
//       <main className="relative min-h-screen overflow-hidden bg-[#181818]">
//         <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent z-10" />
      
//         <div className="container relative z-20 mx-auto px-5 py-20 flex flex-col items-center justify-center min-h-screen">
//           <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wider mb-8 text-center">
//             Coming <span className="text-[#f85a23]">Soon</span>
//           </h1>
          
//           <p className="text-white/80 text-xl mb-8 text-center max-w-2xl">
//             We're working hard to bring you something amazing.
//           </p>
//         </div>
//       </main>
//       <Footer />
//     </>
//   )
// }




'use client'

import Footer from "@/components/Footer"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <main className="" data-scroll-section>

  <section data-scroll-section className="py-20">
      <div className="container mx-auto px-4 ">
        <h2 className="w-full text-white text-center text-2xl lg:text-5xl  xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider my-10">
          Our <span className="text-[#f85a23]">Blogs</span>
        </h2>
     <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
    <Card sx={{ maxWidth: 345 }} >
      <CardHeader
        title="The Art of Data-Driven Creative Decisions: Performance Marketing and UGC Videos Simplified"
        subheader=" published by True Bridge Media"
      />
      <CardMedia
        component="img"
        height="194"
        image="/HeroImages/blog1.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        At True Bridge Media, a leading performance marketing agency, we combine creativity with analytics to drive results. Whether it’s crafting compelling UGC ads or refining performance marketing strategies, we deliver impactful campaigns that maximize ROI. If you’re ready to unlock the full potential of performance marketing, let’s collaborate and redefine what’s possible.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>1.⁠ ⁠Creative Testing: The Foundation of Success
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            
          Every great campaign starts with experimentation. We rigorously test multiple creatives, including UGC Ads and UGC Videos, to identify what resonates most with the target audience. This approach minimizes guesswork and ensures we’re starting on a solid foundation.




          </Typography>
          <Typography sx={{ marginBottom: 2 }}>2.⁠ ⁠Finding Winners: The Key to Scaling

          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            
          Once we’ve tested, it’s about honing in on the ads that deliver the best ROAS. These “winners” become the blueprint for crafting more impactful performance marketing ads.
          </Typography>


          <Typography sx={{ marginBottom: 2 }}>3.⁠ ⁠Scaling with Volume

          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            
          With winning creatives in hand, we focus on increasing ad spend strategically to maximize reach and conversions without sacrificing efficiency. Scaling isn’t just about spending more; it’s about spending smarter.
          </Typography>


          <Typography sx={{ marginBottom: 2 }}>4.⁠ ⁠Data-Driven Decisions

          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            
          Performance marketing thrives on data. By analyzing real-time metrics, we refine our strategies and ensure that every decision is backed by insights, not intuition.
          </Typography>


          <Typography sx={{ marginBottom: 2 }}>5.⁠ ⁠Analyzing Ad Accounts for Creative Insights

          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            
          Ad account analysis isn’t just about numbers; it’s about stories. By understanding the performance of various creatives, we make informed decisions about what to tweak, test, or scale next.
          </Typography>

        
        </CardContent>
      </Collapse>
    </Card>

    </div>
    
    </div>
  </section>
  <Footer/>

  </main>
  );
}



// 'use client';

// import React from 'react';
// import Footer from '@/components/Footer';
// import { Button } from 'react-bootstrap';


// const blogs = [
//   {
//     title: 'Shrimp and Chorizo Paella',
//     subheader: 'September 14, 2016',
//     image: '/HeroImages/blog1.webp',
//     description: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests.`,
//     method: `Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.`,
//   },
//   {
//     title: 'Shrimp and Chorizo Paella',
//     subheader: 'September 14, 2016',
//     image: '/HeroImages/blog1.webp',
//     description: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests.`,
//     method: `Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.`,
//   },
//   {
//     title: 'Shrimp and Chorizo Paella',
//     subheader: 'September 14, 2016',
//     image: '/HeroImages/blog1.webp',
//     description: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests.`,
//     method: `Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.`,
//   },


//   // Add more blog entries as needed
// ];

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="w-full text-white text-center text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-wider my-10">
//           Our <span className="text-[#f85a23]">Blogs</span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {blogs.map((blog, index) => (
//              <Card style={{ width: '18rem' }}>
//              <Card.Img variant="top" src="holder.js/100px180" />
//              <Card.Body>
//                <Card.Title>Card Title</Card.Title>
//                <Card.Text>
//                  Some quick example text to build on the card title and make up the
//                  bulk of the card's content.
//                </Card.Text>
//                <Button variant="primary">Go somewhere</Button>
//              </Card.Body>
//            </Card>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </section>
//   );
// }





