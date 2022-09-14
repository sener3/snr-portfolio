import Box from "../components/Box";
import Image from "../components/Image";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Typography from "../components/Typography";

function Home() {
    return (
        <Box>
            <Navbar />

            <Box className="hero container">
                <Box className="hero-left">
                    <Typography className="hero-title" variant="h1">
                        Hello,
                        <br />
                        <Typography className="hero-span" variant="span">
                            I’m
                        </Typography>
                        <Typography className="text-highlight" variant="span">
                            Șener
                        </Typography>
                        !
                    </Typography>

                    <Typography className="hero-subtitle" variant="p">
                        I'm a student, passionate about web development and web design who loves to learn and build interesting things. I'm
                        trying to become better every day by learning new technologies, deepening the technologies I already know, watching
                        tutorials and building side projects.
                    </Typography>
                </Box>

                <Box className="hero-right">
                    <Image src="/images/hero.png" />
                </Box>
            </Box>

            <Box id="container-projects" className="container container-projects">
                <Banner />
            </Box>
        </Box>
    );
}

export default Home;
