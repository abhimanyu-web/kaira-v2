import { useState } from "react";
import { FaHome, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import bgimg from "../assets/images/experience-background.webp";

const LayoutAndConfig = () => {
  const [selectedConfig, setSelectedConfig] = useState(null);

  const configurations = [
    {
      title: "1 BHK Villa",
      desc: "Cozy and compact for peaceful getaways.",
      bgImage: "src/assets/images/1BHK.png",
    },
    {
      title: "2 BHK Villa",
      desc: "Spacious homes perfect for families.",
      bgImage: "src/assets/images/2BHK.png",
    },
    {
      title: "2 BHK Duplex Villa",
      desc: "Spacious homes perfect for families.",
      bgImage: "src/assets/images/2BHK.png",
    },
  ];

const clusters = [
  {
    title: "Adbhuta",
    desc: "The Forest Cluster",
    image: "src/assets/images/adhbhuta.png",
    bgImage: "src/assets/images/cluster-bg/Adbhuta.png",
    modalContent: `Adbhuta is a sanctuary within a sanctuary. Wrapped in dense green canopies, these plots blur the boundary between wilderness and dwelling. Sunlight seeps through layered leaves, birds nest close, and the air feels ancient. Building here is less about architecture and more about reverence; creating space within the forest, not against it. For those who seek solitude, Adbhuta offers the purest form of escape. Where silence hums, shadows dance, and time itself slows down.`,
  },
  {
    title: "Sarovara",
    desc: "The Lakeview Cluster",
    image: "src/assets/images/sarovara.png",
    bgImage: "src/assets/images/cluster-bg/Sarovara.png",
    modalContent: `Perched at the water’s edge, Sarovara reflects the soul of stillness. The lake stretches like liquid glass, mirroring the sky’s moods from dawn’s first blush to twilight’s hush. Each plot here commands uninterrupted views of the horizon, where the light shifts and the air carries the calm of distance. Designed for those who crave privacy and poetry, Sarovara transforms living into a lakeside meditation. To live here is to own not just land, but a horizon that changes with you.`,
  },
  {
    title: "Vatika",
    desc: "The Garden Cluster",
    image: "src/assets/images/vatika.png",
    bgImage: "src/assets/images/cluster-bg/VATIKA.png",
    modalContent: `Vatika is where architecture and botany intertwine. Each plot unfolds into its own garden. Lawns kissed by dew, shaded paths lined with jasmine and frangipani, corners designed for morning reflection or evening tea. The landscaping is intentional yet effortless, merging curated beauty with organic growth. Here, the garden is not ornamental; it is emotional. A daily invitation to reconnect with stillness. Artfully designed yet deeply alive; a living portrait that grows with its residents, season after season.`,
  },
  {
    title: "Samahita",
    desc: "The Balanced Cluster",
    image: "src/assets/images/samahita.png",
    bgImage: "src/assets/images/cluster-bg/SAMAHITA.png",
    modalContent: `Samahita means harmony and that is exactly what it offers. Perfectly contoured plots that balance value with vision, simplicity with serenity. Here, every home is an expression of grounded elegance; thoughtfully placed, open to the sky, rooted in the earth. The design philosophy celebrates proportion over grandeur, comfort over excess. For families who seek connection over indulgence, Samahita represents the quiet strength of balance; where living well means living wisely.`,
  },
  {
    title: "Unnata",
    desc: "The Elevated Cluster",
    image: "src/assets/images/unnata.png",
    bgImage: "src/assets/images/cluster-bg/Unnata.png",
    modalContent: `Rising along Sakleshpur’s gentle slopes, Unnata lives up to its name; The Elevated. From here, the hills unfold like a painting in motion, each layer of mist revealing a new horizon. The land’s natural gradient lends every villa a view, every breath a breeze. This elevation isn’t just topographical, it’s spiritual. To stand here is to feel lifted in every sense: above the noise, beyond the rush, closer to the clouds. Unnata is a vantage point for vision, for perspective, for peace.`,
  },
];
  return (
    <section
      style={{ backgroundImage: `url(${bgimg})` }}
      className="py-16 bg-[#F5EDD9]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-secondary text-3xl md:text-4xl font-bold text-brown mb-10"
        >
          The Project
        </motion.h2>

        {/* Main Project Layout Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-12"
        >
          <img
            src="src/assets/images/Kaira_Masterplan.png"
            alt="Project Layout Map"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <p className="text-brown text-sm italic mt-2">
            *Project Master Layout – for illustration purposes only.
          </p>
        </motion.div>

        {/* Villa Plots */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-secondary text-3xl md:text-4xl font-bold text-brown mb-10"
        >
          Villa Plots & Configurations
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-12"
        >
          <img
            src="src/assets/images/VillaPlot.png"
            alt="Project Layout Map"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <p className="text-brown text-sm italic mt-2">
            *Layout – for illustration purposes only.
          </p>
        </motion.div>

        {/* Configurations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center mb-20">
          {configurations.map((config, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedConfig(config)}
              className="flex flex-col items-center border-2 border-brown rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 cursor-pointer w-full sm:w-80"
            >
              <FaHome className="text-brown text-4xl mb-3" />
              <h3 className="text-xl font-bold text-brown">{config.title}</h3>
              <p className="text-gray-600 mt-2">{config.desc}</p>
              <p className="text-brown underline mt-3 text-sm">View Layout</p>
            </motion.div>
          ))}
        </div>

        {/* Estate Plots & Clusters */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-secondary text-3xl md:text-4xl font-bold text-brown mb-10"
        >
          Estate Plots & Clusters
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-12"
        >
          <img
            src="src/assets/images/2.png"
            alt="Project Layout Map"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <p className="text-brown text-sm italic mt-2">
            *Layout – for illustration purposes only.
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-secondary text-3xl md:text-4xl font-bold text-brown mb-10"
        >
          Visit our Site and Explore the Clusters!   
        </motion.h2>

        {/* Clusters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {clusters.map((cluster, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedConfig(cluster)}
              className="flex flex-col items-center border-2 border-brown rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 cursor-pointer w-full sm:w-46"
            >
              <img
                src={cluster.image}
                alt={cluster.title}
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="text-lg font-bold text-brown">{cluster.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{cluster.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
<AnimatePresence>
  {selectedConfig && (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden max-w-6xl w-full h-[80vh] flex flex-col justify-end text-white p-10"
        style={{
          backgroundImage: `url(${selectedConfig.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Close button */}
        <button
          className="absolute top-5 right-5 text-white hover:text-red-400 text-2xl z-20"
          onClick={() => setSelectedConfig(null)}
        >
          <FaTimes />
        </button>

        {/* Modal Text Content */}
          <div className="relative z-10 flex flex-col justify-end h-[80vh] p-10 text-right items-end">
  <div className="max-w-3xl">
    <h1 className="text-5xl sm:text-6xl font-bold mb-3 tracking-wide text-white drop-shadow-lg">
      {selectedConfig.title}
    </h1>
    <h3 className="text-2xl italic text-green-300 mb-6">
      {selectedConfig.desc}
    </h3>
    <p className="text-lg text-gray-200 leading-relaxed max-w-xl ml-auto">
      {selectedConfig.modalContent}
    </p>
  </div>
</div>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </section>
  );
};

export default LayoutAndConfig;
