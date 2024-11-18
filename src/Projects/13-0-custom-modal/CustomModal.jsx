import React, { Fragment, useState } from "react";
import Button from "../components/Button";
import Modal from "./Modal";

function CustomModal() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const openModal2 = () => {
    setShowModal2(true);
  };

  const openModal3 = () => {
    setShowModal3(true);
  };

  const closeModal = () => {
    setShowModal(false) || setShowModal2(false) || setShowModal3(false);
  };

  return (
    <Fragment>
      <div className="p-10 text-center">
        <h1 className="text-3xl mb-5">Custom modal with tailwind</h1>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 "
          onClick={openModal}
          id="btn1"
        >
          Text modal
        </button>
        <Button
          btnClass={
            "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 "
          }
          text={"Video modal"}
          onClick={openModal2}
          id="btn2"
        />
        <Button
          btnClass={
            "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5 "
          }
          id="btn3"
          text={"Form modal"}
          onClick={openModal3}
        />
      </div>
      <Modal isVisible={showModal} onClose={closeModal}>
        <div>
          <h2 className="text-3xl text-center">Text Modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            distinctio voluptatum sed commodi atque, ratione qui temporibus quis
            dicta esse dolor nostrum natus accusamus harum fugit nihil tempore
            eos officia. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Natus at consequuntur saepe totam explicabo illo voluptatibus
            iusto reiciendis, suscipit ullam blanditiis quibusdam omnis
            assumenda quos voluptatem, error deserunt iste officiis?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
            placeat debitis aliquam reiciendis praesentium sunt, officiis
            aspernatur laborum iusto qui veritatis magnam cum odit? Voluptas,
            fuga. Rem facilis facere cum. Recusandae, unde? Odio impedit natus
            velit maiores neque voluptatem reiciendis fugit inventore culpa
            aperiam, fuga perferendis mollitia laborum hic nihil, enim quam.
            Maxime non quos est laborum. Odio, ipsum voluptates. Odit
            perferendis harum, adipisci ex tempore corporis quasi amet
            exercitationem assumenda recusandae in enim alias voluptatibus
            deleniti voluptas neque consequatur quam? Neque aperiam vitae
            dolorem magnam modi, deleniti qui enim. Sapiente autem perspiciatis
            fugit perferendis nam nobis aspernatur, consectetur esse, odit quis
            nihil assumenda mollitia natus et officiis impedit. Officia omnis
            quaerat magnam natus id earum quibusdam quod iusto temporibus.
            Deleniti eum maxime doloremque! Vero illo enim cum odit inventore,
            vel sequi tempore veritatis in incidunt magni itaque aperiam
            possimus sint porro repudiandae, nemo, nisi quos nihil sapiente!
            Minima, expedita.
          </p>
        </div>
      </Modal>
      <Modal isVisible={showModal2} onClose={closeModal}>
        <h2 className="text-3xl text-center">Video Modal</h2>
        <div className="relative w-full pb-[56.25%] ">
          <iframe
            src="https://www.youtube.com/embed/nwJK-jo91vA?si=yOUcIcY8ayx9tBqO"
            title="YouTube video player"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
      <Modal isVisible={showModal3} onClose={closeModal}>
        <h2 className="text-3xl text-center">Form Modal</h2>
        <form className="flex flex-col justify-around gap-y-4" action="">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter your name" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" />
          <button className="text-2xl w-[20%] mx-auto bg-blue-400">
            Submit
          </button>
        </form>
      </Modal>
    </Fragment>
  );
}

export default CustomModal;
