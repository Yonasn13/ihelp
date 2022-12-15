import requestController from "../../controllers/requestController"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const request = await requestController.create(req.body)
    res.status(200).redirect(`/helper/requests`)
  } else {
    return res.status(400).json({ msg: "incorrect method" })
  }
}