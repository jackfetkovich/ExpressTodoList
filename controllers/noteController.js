const Note = require('../models/noteModel');

exports.createNote = async(req, res, next) => {
  try {
    
    const newNote = await Note.create(req.body);

    // res.status(200).json({
    //   status: 'success',
    //   data: {
    //     newNote
    //   }
    // })
    next()



  } catch(err) {
    res.status(400).json({
      status: "fail",
      error: err
    })
  }
}

exports.getAllNotes = async(req, res, next) => {
  try {
    const notes = await Note.find();
    // res.status(200).json({
    //   status: 'success',
    //   data: {
    //     notes
    //   }
    // })
    req.notes = notes;

    next()

  } catch(err) {
    res.status(400).json({
      status: "fail",
      error: err
    })
  }
}