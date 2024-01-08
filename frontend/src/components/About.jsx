import React from 'react';
// import { Link } from 'react-router-dom';
// import UserService from '../services/UserService';
import './About.css';

const About = () => {
    return (
        <div
          id="about"
          className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-sm lg:text-lg  font-normal">
          <h4 className="head text-3xl lg:text-5xl mt-12 font-bold">
            <i><b>About Me</b></i>
          </h4>

          <div className="flex flex-row gap-6 ml-8">
            <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
              <h3 className="text-xl lg:text-3xl font-medium pt-4">
                I'm <span className="text-yellow-600">Yohanda Gita</span> a Web
                Enthusiast
              </h3>
              <p className="pt-3 leading-7 text-slate-900 text-justify">
                 Haloo aku Yohanda Gita Pratiwi, mahasiswI dengan NIM 2209571 Pendidikan Ilmu Komputer
                 Universitas Pendidikan Indonesia. Lahir di Bandung pada 25 September 2003,
                 Saya memiliki semangat tinggi dalam mempelajari teknologi. Keahlian dalam analisis dan dedikasi,
                 untuk terus belajar membuat saya proaktif dalam mengikuti perkembangan teknologi.
                 Saya juga memiliki jiwa kepemimpinan yang terlihat dari keterlibatannya dalam kegiatan kampus.
                 Secara keseluruhannya, saya adalah individu yang bersemangat, fokus pada pengembangan pengetahuan
                 di bidang ilmu komputer, dan memiliki bakat kepemimpinan.
              </p>
            </div>
                {/* <div className="foto">
                    <img
                        src={require('./tes.jpg')} 
                        alt="Your Alt Text"
                        style={{ width: "350px" }}
                    />
                </div> */}
            </div>
          </div>
      );
};

export default About;
