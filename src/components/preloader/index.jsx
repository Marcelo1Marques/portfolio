import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../preloader/styles";
import Image from "next/image";
import background from "../../assets/img/bg-animation.jpg"

const Preloader = () => {
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }
    return (
        <div className={styles.outer}>
            <motion.div
            style={{
                width: 400,
                height: 400,
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                borderRadius: 30,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                perspective: 400,
                rotateX: rotateX,
                rotateY: rotateY,
            }}
            onMouseMove={handleMouse}
            >


                <motion.div
                
                    style={{
                        rotateX: rotateX,
                        rotateY: rotateY,
                    }}
                />
                    <Image className={styles.animation} width="200px" height="200px" src={background} />
            </motion.div>
        </div>
    );
};

export default Preloader;