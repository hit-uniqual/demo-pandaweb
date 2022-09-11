import React from 'react';
import DrawerLeft from '../components/layout/sidebar/DrawerLeft';
import { Card, Grid, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Blogs = () => {
  const renderData = (
    <div>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ p: '0 !important' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='250'
                image="https://s3-alpha-sig.figma.com/img/0b48/0aa1/471e135b5a76093f4c2c3788d6cc6d1f?Expires=1663545600&Signature=CQ2ev~kSlH9oMm9kUt1533zdFFNGhuDvbib6SvZ6FiKv-lF8M2o6U7qNsMOLwFPlx-X51de8tjgOZA1FBtQSv-7qwEzirDyewhVMboPqB6v0EC5RohKTBay4y4BK78h7bS31d5yKgdih7WELdWEMuXfAK5Xkm3UMbxV2fqQo7BmfRX5lKme7nUF~s6vck095E4WwNKPxGd4gBIzwBwKjXvWMjYV-PA1tn7Ia3iE~HKm8rx4nh2vQWd7CAeXG6GAFLgmI9KiQSjgo~l0LeQTv7lz7jHKcGbVbZ9kFx6mQKpzmQPZyrDKsc7M2gEYpqJeAuO1An9RpU28-hlAAGwerHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                  7 Best Indian stock market Blogs to Follow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...Trade Brains was founded by Kritesh Abhishek, an NIT Warangal graduate, in Jan 2017. It is a fastest growing Financial Educational Blog in India with over...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );

  return <DrawerLeft title="BLOGS" page={renderData} />;
};

export default Blogs;
