import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "./ModelCreateTicket.module.css";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAddTicket from "./../../hooks/useAddTicket";
import { BiCloudUpload } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { setPageHome } from "../../redux/nav.slice";
export default function ModelCreateTicket() {
  let { departments } = useSelector((state) => state.home);
  let { isPageHome } = useSelector((state) => state.navbar);
  let dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);

  let navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = Array.from(event.target.files)
      .filter((ele) => ele.type.match(/^image/))
      .slice(0, 2); // Get the first selected file
    file.map((ele) => {
      ele["path"] = URL.createObjectURL(ele);
    });
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent the default behavior to allow dropping
  };

  const deletePhoto = (name) => {
    let index = selectedFile.findIndex((ele) => ele?.name === name);
    let filterd = selectedFile.splice(index, 1);
    setSelectedFile(filterd);
  };

  const handleDrop = (event) => {
    event.preventDefault(); // Prevent the default behavior
    const files = Array.from(event.dataTransfer.files)
      .filter((ele) => ele.type.match(/^image/))
      .slice(0, 2); // Get the first selected file;
    files.map((ele) => {
      ele["path"] = URL.createObjectURL(ele);
    });
    setSelectedFile(files);
  };

  let { mutate } = useAddTicket(() => {
    navigate("/");
  });

  let validationSchema = new Yup.object({
    subject: Yup.string().required("Subject required"),
    from: Yup.string().required("Start Date is required"),
    to: Yup.string().required("end Date is required"),
    description: Yup.string().required("Write an description ").max(300),
  });

  let formik = useFormik({
    initialValues: {
      subject: "",
      from: "",
      to: "",
      description: "",
      status: "Pending",
    },
    validationSchema,
    onSubmit: mutate,
  });

  useEffect(() => {
    if (isPageHome) {
      dispatch(setPageHome());
    }
  }, []);

  return (
    <React.Fragment>
      <Logo />
      <Modal
        show={true}
        onHide={() => {
          navigate("/");
        }}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header className=" border-0" closeButton>
          <div className={styles.icon}>
            <AiOutlinePlusCircle />
          </div>
          <Modal.Title>
            Create Company Ticket
            <p className={styles.p}>
              Creating a new ticket to be sent between company departments
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit} className="row gy-3">
            <Form.Group
              className="col-12"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Subject <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                type="text"
                name="subject"
                placeholder="What is your Subject?"
              />
              {formik.errors.subject && formik.touched.subject && (
                <div className="alert alert-danger w-25 p-1">
                  {formik.errors.subject}
                </div>
              )}
            </Form.Group>
            <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
              <Form.Label>
                From <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                name="from"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.from}
                aria-label="Default select example"
              >
                <option>Select Department</option>
                {departments.map((ele) => (
                  <option key={ele.id}> {ele.name}</option>
                ))}
              </Form.Select>
              {formik.errors.from && formik.touched.from && (
                <div className="alert alert-danger w-50 p-1">
                  {formik.errors.from}
                </div>
              )}
            </Form.Group>
            <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
              <Form.Label>
                To <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                name="to"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.to}
                aria-label="Default select example"
              >
                <option>Select Department</option>
                {departments.map((ele) => (
                  <option key={ele.id}> {ele.name}</option>
                ))}
              </Form.Select>
              {formik.errors.to && formik.touched.to && (
                <div className="alert alert-danger w-50 p-1">
                  {formik.errors.to}
                </div>
              )}
            </Form.Group>
            <Form.Group
              className="col-12"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                description <span className="text-danger">*</span>
              </Form.Label>
              <textarea
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                name="description"
                className={`form-control`}
                style={{ resize: "none" }}
                placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."
                rows={4}
              />

              {formik.errors.description && formik.touched.description && (
                <div className="alert alert-danger w-50 p-1">
                  {formik.errors.description}
                </div>
              )}
            </Form.Group>
            <Form.Group className="col-12">
              <Form.Label htmlFor="photo" className="fs-6 pointer">
                Attach Photo
              </Form.Label>
              <Form.Label
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                htmlFor="photo"
                className={styles.photo}
              >
                <div className={styles.icon}>
                  <BiCloudUpload />
                </div>
                <h6>Click to upload photo</h6> or drag and drop
              </Form.Label>
              <Form.Control
                id="photo"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                multiple
                className="d-none"
              />
            </Form.Group>
            {selectedFile && selectedFile.length > 0 && (
              <div className="col-12  m-0">
                <div className="row ">
                  {selectedFile.map((file, index) => (
                    <div key={index} className="col-6">
                      <div className="row shadow-lg p-2">
                        <div className="col-3">
                          <img
                            src={file.path}
                            alt=""
                            width={"75px"}
                            height={"75px"}
                            className="rounded-2"
                          />
                        </div>
                        <div className="col-7 d-flex flex-column justify-content-center">
                          <p className="m-0 fw-bold">
                            {file.name
                              .split(".")[0]
                              .split("")
                              .slice(0, 10)
                              .join("")}
                            .{file.name.split(".")[1]}
                          </p>
                          <p className="m-0">
                            {Math.ceil(file.size / 1024)} KB
                          </p>
                        </div>
                        <div className="col-2 d-flex flex-column justify-content-center">
                          <AiOutlineDelete
                            className="fs-3 text-danger pointer"
                            onClick={() => {
                              deletePhoto(file.name);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="col-6">
              <Button
                className="w-100"
                variant="outline-secondary"
                onClick={() => {
                  formik.handleReset();
                  navigate("/");
                }}
              >
                Cancel
              </Button>
            </div>
            <div className="col-6">
              <Button
                type="submit"
                className="w-100"
                style={{ backgroundColor: "var(--Primary-blue-300)" }}
                variant="primary"
                disabled={!(formik.dirty && formik.isValid)}
              >
                Create
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
