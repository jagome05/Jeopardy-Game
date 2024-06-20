const router = require("express").Router();

//*GET Reqs
// GET all messages
router.get("/allQuestions", async (req, res) => {
        // try {
          // --> this returns a text response T.T
          //todo edit fetch options?
        // let res = await fetch('http://cluebase.lukelav.in/clues/1'
        //   , {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({data})
        // }
        let url = 'http://cluebase.lukelav.in/clues/1'
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            res.status(200).json(data)
          })
          .catch((err) => console.log(err))
      // );
        // let results = await res.text()
        // let results = await res.json()
        // return results
        // let data = JSON.parse(results)
      // } catch(err) {
        // res.send(err)
      // }
      // console.log(results)
});


// router.get("/findMessage/:id", async (req, res) => {});


// *POST Req
// router.post("/postMessage", async (req, res) => {});


// //*PUT Req
// router.put("/updateMessage/:id", admin, async (req, res) => {});


// //*DELETE Req
// router.delete("/deleteMessage/:id", admin, async (req, res) => {});

module.exports = router;

//? References
// https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
// https://www.geeksforgeeks.org/mongoose-populate-method/
// https://stackoverflow.com/questions/77557660/delete-specific-object-in-array-element-in-document-and-save-mongoose
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://dev.to/paperbyte/async-await-vs-fetchthen-20oe#:~:text=With%20await%20%2C%20we%20are%20able,()%20we%20are%20promise%20chaining.