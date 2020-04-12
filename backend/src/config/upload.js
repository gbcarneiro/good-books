const multer = require('multer')
const path = require('path')

/*module.exports = {
	storage = multer.diskStorage({
		destination: path.resolve(__dirname, '..', '..', 'books'),
		filename: function (req, file, cb) {
			const uniqueSuffix = Date.now + '-' + Math.round(Math.random() * 1E9)
			cb(null, file.fieldname + '-' + uniqueSuffix)
		}
	})
}
*/