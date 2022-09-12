import Box from "../components/Box";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import Typography from "../components/Typography/Typography";

function Home() {
    return (
        <Box>
            <Navbar />

            <Box className="hero">
                <Box className="hero-left">
                    <Typography className="hero-title" variant="h1">
                        Hello, I’m
                        <Typography className="text-rotated" variant="span">
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
        </Box>
    );
}

export default Home;
