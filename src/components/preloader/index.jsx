import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../preloader/styles";
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
        <div className={styles.animation}>
            <motion.div
            style={{
                width: 600,
                height: 600,
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                borderRadius: 30,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                perspective: 400,
            }}
            onMouseMove={handleMouse}
            >
                <motion.div
                    style={{
                        width: 250,
                        height: 250,
                        borderRadius: 50,
                        background: "../../assets/img/bg-animation.jpg",
                        rotateX: rotateX,
                        rotateY: rotateY,
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Preloader;