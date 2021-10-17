import React from 'react';
import axios from 'axios';
import AdminFeedback from './Admin_Feedback'
import Button from '@material-ui/core/Button';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { saveAs } from 'file-saver';

export default class AdminFeedbacks extends React.Component {
  constructor(props) {
    super()
    this.generateReport = this.generateReport.bind(this);
    this.state = {
      feedbacks: []
    }
  }

  async componentDidMount() {
    await axios.get('http://localhost:8070/admin/getcomments').then((res) => {
      this.setState({ feedbacks: res.data.feedbacks })
    }).catch((err) => {
      console.log(err.message)
    })
  }

  async generateReport() {

    const obj = { feedbacks: this.state.feedbacks }
    await axios.post('http://localhost:8070/generatefeedbackreport', obj, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }, }).then((res) => {
      alert('Report Generated')
      console.log(res)
      console.log(res.data)
      const pdfBlog = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlog, 'Feedbacks.pdf');

      //window.open(res.data, '_blank');
    }).catch((err) => {
      console.log(err.message)
    })
    console.log(obj)
  }

  render() {
    return (
      <div>
        <Button className="form-group" id="bb" type="submit" style={{ background: "#41AAC8", width: 40 + "%", align: "right" }} startIcon={<InsertDriveFileIcon />} onClick={this.generateReport}>
         Generate Report</Button><br/><br/>
        {this.state.feedbacks.map((feedback) => (
          <div>
            <AdminFeedback 
              name={feedback.userName}
              rating={feedback.rating}
              comment={feedback.comment}
              picture={feedback.userPicture}
              date={feedback.date}
            />
          </div>
        ))}
      </div>
    )
  }
}