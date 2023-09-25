import mongoose from "mongoose"

const videoSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    url: { type: String, required: true },
    category: { type: String, required: true  }
}, { versionKey: false });

const video = mongoose.model("videos", videoSchema);

export default video;