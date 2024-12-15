import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";
import Navbar from './Navbar';


export default function FirstPage() {
  return (
    <>
    <Navbar/>
    <Container maxWidth="lg">
      {/* About Kerala Tourism Section */}
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          About Kerala
        </Typography>
        <Typography variant="body1" paragraph>
          Kerala, often called “God’s Own Country,” is a tropical paradise located on the southwestern coast of India. With its lush landscapes, serene backwaters, golden beaches, and rich cultural heritage, Kerala is one of the most sought-after travel destinations in the world. It is bordered by the Arabian Sea to the west, the Western Ghats to the east, and is known for its breathtaking natural beauty, which includes dense forests, tea plantations, waterfalls, and unique wildlife.
          Culture and tradition form the heart of Kerala, and the state’s rich history can be seen in its vibrant festivals, classical arts, and architecture.
        </Typography>
        
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              margin: "10px"
            }}
          >
            <img
              src="https://smarthistory.org/wp-content/uploads/2022/08/kathakali-mask.png"
              alt="Kerala Tourism"
              style={{
                width: "1000px",
                borderRadius: "8px",
                height: "500px",
              }}
            />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Experience Kerala's Wellness Section */}
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          Experience Kerala's Wellness
        </Typography><br />
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://www.keralatourism.org/images/ayurveda/static-banner/large/Rejuvenation_Therapy_-05112019092238.jpg"
                alt="Kerala Wellness"
              />
              <CardContent>
                <Typography variant="h6">Ayurvedic Treatments</Typography>
                <Typography variant="body2">
                  Kerala is renowned for its traditional Ayurvedic treatments, where visitors can experience
                  a unique healing process to rejuvenate both body and mind.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://i.pinimg.com/736x/26/09/6a/26096a7662aeee72bdd2dcdc853fc5a4.jpg"
                alt="kalaripayattu"
              />
              <CardContent>
                <Typography variant="h6">Kalaripayattu</Typography>
                <Typography variant="body2">
                  Kadathanadan Kalari Centre & Navarasa Kathakali, Thekkady, Periyar, Punarjani Traditional Village, Munnar; Kalari Kshethra, Munnar; Kerala Kathakali Centre, Kochi, Greenix Village, Fort Kochi, etc. to name a few. Don't miss your chance to experience the essence of Kalaripayattu on your trip to Kerala!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://ayurvedichealingvillage.com/wp-content/uploads/2024/11/F-2.jpg"
                alt="Spa Experience"
              />
              <CardContent>
                <Typography variant="h6">Spa & Wellness Centers</Typography>
                <Typography variant="body2">
                  Kerala is home to a variety of spa and wellness centers that offer luxurious services like
                  traditional massages, detox programs, and more.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Memories for a Lifetime Section */}
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          Memories for a Lifetime
        </Typography>
        <Typography variant="body1" paragraph>
          Kerala is a place where memories are created for a lifetime. From the serene backwaters to the
          vibrant festivals, every moment spent in Kerala will be cherished forever. Whether it's a houseboat
          ride or a visit to the tea gardens, you'll never forget the tranquility and beauty of this paradise.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fvertical%2Fvaliyaparamba-backwaters-1724155653_00094e1ee024e44c6744.webp&w=3840&q=75"
                alt="Kerala Backwater"
              />
              <CardContent>
                <Typography variant="h6">Backwater Experience</Typography>
                <Typography variant="body2">
                  Experience the calm and beauty of Kerala's backwaters, a serene and unforgettable journey.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://ayurvedichealingvillage.com/wp-content/uploads/2024/11/C-2.jpg"
                alt="Kerala Backwater"
              />
              <CardContent>
                <Typography variant="h6">A Global Attraction for Tourists</Typography>
                <Typography variant="body2">
                  Kerala attracts foreigners with its breathtaking landscapes, tranquil backwaters, rich culture, Ayurvedic treatments, pristine beaches, and vibrant festivals, offering a perfect blend of relaxation and adventure.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          Art Forms of Kerala
        </Typography><br />
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image="https://images.unsplash.com/photo-1699163104435-4a1d618043b1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2F0aGFrYWxpfGVufDB8fDB8fHww"
                alt="Kathakali"
              />
              <CardContent>
                <Typography variant="h6">Kathakali</Typography>
                <Typography variant="body2">
                Kathakali is a traditional form of Indian Classical Dance, and one of the most complex forms of Indian theatre. It is a play of verses . These Verses called Kathakali literature or Attakatha . Mostly played in the courts of Kings and Temple festivals . Hence it known as suvarna art forms</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image="https://cdn-images-1.medium.com/v2/resize:fit:720/1*PQFNCUeUuF1QS-uB_eswPA.jpeg"
                alt="Kalaripayattu"
              />
              <CardContent>
                <Typography variant="h6">Kalaripayattu</Typography>
                <Typography variant="body2">
                Kalaripayattu is a martial art which developed out of combat-techniques of the 11th-12th century battlefield, with weapons and combative techniques that are unique to Kerala. The word Kalaripayattu is a combination of two Malayalam words - kalari (training ground or battleground) and payattu (training of martial arts), which is roughly translated as "practice in the arts of the battlefield".  </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image="https://www.keralatourism.org/images/picture/hri/Graceful_dance_by_women_groups_Thiruvathira_2286.jpg"
                alt="Thiruvathirakali"
              />
              <CardContent>
                <Typography variant="h6">Thiruvathirakali</Typography>
                <Typography variant="body2">
                Thiruvathirakali is considered a must especially for women who observe Thiruvathira Vradam. This art form is also known as Kaikottikali and Kummikali with slight variations. The dance is believed to bring a long and auspicious married life and marriage of choice. This play is performed at night on Thiruvathira day.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Puliyoor_Kali_Theyyam_at_Mathamangalam.jpg/220px-Puliyoor_Kali_Theyyam_at_Mathamangalam.jpg"
                alt="Theyyam    "
              />
              <CardContent>
                <Typography variant="h6">Theyyam</Typography>
                <Typography variant="body2">
                Theyyam is a Hindu religious ritual practiced in northern Kerala and some parts of Karnataka. Theyyam is also known as Kaḷiyāṭṭaṁ or Tiṟa. Theyyam consists of traditions, rituals and customs associated with temples and sacred groves of Malabar
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image="https://images.hindustantimes.com/img/2022/08/27/1600x900/EEWYBA6U4AArBs7_1661604301274_1661604326288_1661604326288.jpg"
                alt="Pulikali"
              />
              <CardContent>
                <Typography variant="h6">Pulikali</Typography>
                <Typography variant="body2">
                Puli kali (Meaning: Tiger Dance) is a recreational folk art from the state of Kerala, India. It is performed by trained artists to entertain people on the occasion of Onam, an annual harvest festival, celebrated mainly in the Indian state of Kerala.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {/* Famous Foods Section */}
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          Famous Foods of Kerala
        </Typography><br />
        <Typography variant="body1" paragraph>
          Kerala’s cuisine is as diverse as its culture. Whether you're a fan of spicy seafood, aromatic curries,
          or sweet treats, Kerala has something for everyone. The rich flavors of coconut, curry leaves, and
          local spices make Kerala’s food truly unique. Some famous dishes include Sadya, Porotta Beef, Karimeen, Appam, and
          Malabar Biryani.
        </Typography><br />
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://gumlet.assettype.com/theestablished/2022-09/b93f5781-b2d1-4a89-ac11-cec0d080dce9/Lead_Onam.jpg"
                alt="Kerala Food"
              />
              <CardContent>
                <Typography variant="h6">Sadya</Typography>
                <Typography variant="body2">
                  Sadya is a traditional Kerala feast consisting of rice and a variety of vegetable dishes, served on
                  a banana leaf. A truly authentic experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://tandooriwala.com/wp-content/uploads/2024/01/1694864051124.jpg"
                alt="Kerala Food"
              />
              <CardContent>
                <Typography variant="h6">Malabar Biriyani</Typography>
                <Typography variant="body2">
                  Unlike other Indian biryanis, Malabar biryani uses a special type of small, thin rice called 'Kaima' or 'Jeerakasala.' The rice is light and fluffy, while the meat is marinated in spices like cinnamon, cloves, and cardamom, making each bite aromatic and delicious.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://storage.googleapis.com/shy-pub/26456/1649701327309_SKU-0076_0.jpg"
                alt="Kerala Food"
              />
              <CardContent>
                <Typography variant="h6">Porotta and Beef</Typography>
                <Typography variant="body2">
                  It is a typical layered flat Indian bread that is typically sold in eateries and thattukada/roadside stores in Kerala and other South Indian states. Among Keralites, Kerala Parotta with Chilly Beef Fry is a popular dish.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          Major Festivals in Kerala
        </Typography><br />
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image="https://i0.wp.com/happyhouseboat.com/wp-content/uploads/2016/09/onampookkalam.jpg"
                alt="Onam"
              />
              <CardContent>
                <Typography variant="h6">Onam</Typography>
                <Typography variant="body2">
                  Onam is the official state festival of Kerala. It’s a harvest festival which according to legends celebrates the visit of the spirit of the ancient ruler King Mahabali. Onam is a major event for Malayali people and is celebrated across several communities.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image="https://www.tamarindglobal.com/blog/wp-content/uploads/2023/04/thrissur-pooram-img3.jpg"
                alt="Thrissur Pooram"
              />
              <CardContent>
                <Typography variant="h6">Thrissur Pooram</Typography>
                <Typography variant="body2">
                  Thrissur Pooram, held at Thekkinkadu Maidanam in the heart of Thrissur district, is a resplendent festival celebrated with grandeur, blending the spiritual and cultural essence of Kerala.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image="https://media.istockphoto.com/id/1479458011/photo/kerala-vishu-festival-concept-image.jpg?s=612x612&w=0&k=20&c=mej1mtCYQfIk7WslyUTMukNowUOa3RlJ4T-1EDRE1Kw="
                alt="Vishu"
              />
              <CardContent>
                <Typography variant="h6">Vishu</Typography>
                <Typography variant="body2">
                  Vishu marks the beginning of the new year according to the solar calendar, and it is celebrated
                  with great enthusiasm. The day begins with viewing the Vishu Kani (the first sight of the new year),
                  followed by wearing new clothes, preparing the Vishu feast, and bursting crackers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box><br />
    </Container></>
    
  );
}
