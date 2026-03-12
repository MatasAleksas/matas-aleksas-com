"use client"
import {useState, useMemo} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Stack from "./Stack";
import TwoTruths from "./TwoTruths";
import {personal} from "@/data/personal";

export default function Personal() {
    const [currentIndex, setCurrentIndex] = useState(personal.length - 1);

    const handleCardChange = (index) => {
        console.log("Card index:", index);
        setCurrentIndex(index);
    };

    const cards = useMemo(() =>
        personal.map((item, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                key={i}
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
            />
        )), []);

    return (
      <section id="personal" className="py-32 px-6 max-w-6xl mx-auto">
          <motion.h2
              className="text-4xl font-bold text-center mb-20 text-orange"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6 }}
          >
              When I&#39;m not coding...
          </motion.h2>

          <motion.p
              className="text-center text-[#cccccc] mb-6 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
          >
              Here&#39;s what I&#39;m all about.
          </motion.p>

          <div className="flex items-center justify-center gap-32">

              <div className="flex flex-col items-center">

                  <div style={{ width: 350, height: 350 }}>
                        <Stack
                          randomRotation={false}
                          sensitivity={200}
                          cards={cards}
                          onCardChange={handleCardChange}
                          sendToBackOnClick={true}
                          autoplay={false}
                        />
                  </div>

                  <div className="flex gap-1 mt-4">
                      {[...personal].reverse().map((_, index) => {
                          const reversedIndex = personal.length - 1 - index;
                          return (
                              <div
                                  key={index}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      currentIndex === reversedIndex ? "bg-orange w-4" : "bg-white/20"
                                  }`}
                              />
                          );
                      })}
                  </div>
              </div>

              <AnimatePresence mode="wait">
                  <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-md min-h-50 flex flex-col justify-center"
                  >
                      <h3 className="text-2xl font-bold text-orange mb-4">
                          {personal[currentIndex]?.title}
                      </h3>
                      <p className="text-[#cccccc] text-lg leading-relaxed">
                          {personal[currentIndex]?.description}
                      </p>
                  </motion.div>
              </AnimatePresence>

          </div>

          <div className="mt-16">
              <TwoTruths />
          </div>
      </section>
    );
}