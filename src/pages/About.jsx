import React from "react"
import placementImg from "../components/assets/images/placment.png"
import national from "../components/assets/images/national.png"
import international from "../components/assets/images/international.png"
import suitableImg from "../components/assets/images/suitable1.png"
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai"
import { GiBookshelf } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { TfiFiles } from "react-icons/tfi";
import { TbTargetArrow } from "react-icons/tb";
import { SiMinutemailer } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { GiEarthAmerica } from "react-icons/gi";
import Screenshotinpdf from "../components/assets/images/A-level.jpg"
// import join from "../components/assets/images/joinimg.png"
import pdffile from "../components/assets/O_Level_IT.pdf"
import japan from "../../src/components/assets/japan.pdf"



export const About = () => {
  return (
    <>
      <section className='recognitions py-2'>
        <div className='container'>
          <div className='heading text-center py-10' data-aos="zoom-in">
            <h1 className='text-3xl font-semibold text-[#071952]'>Key <span className="text-primary">Features</span></h1>
            <span className='text-sm mt-2 block'></span>
          </div>
          <div className='grid grid-cols-4 gap-5 mt-5 md:grid-cols-1 text-center justify-center'>
            <AboutCard color='bg-[#2D69F0]' icon={<GiBookshelf size={50} className="mx-auto mb-2" />} title='Regular Assessments' />
            <AboutCard color='bg-[#DD246E]' icon={<FaLaptopCode size={50} className="mx-auto mb-2" />} title='Hands-on Practice' />
            <AboutCard color='bg-[#8007E6]' icon={<TfiFiles size={50} className="mx-auto mb-2" />} title='Comprehensive Curriculum' />
            <AboutCard color='bg-[#0CAE74]' icon={<TbTargetArrow size={50} className="mx-auto mb-2" />} title='Clear Learning Objectives' />
            <AboutCard color='bg-[#0CAE74]' icon={<SiMinutemailer size={50} className="mx-auto mb-2" />} title='Engaging Content Delivery' />
            <AboutCard color='bg-[#8007E6]' icon={<GiTeacher size={50} className="mx-auto mb-2" />} title='Expert Faculties' />
            <AboutCard color='bg-[#DD246E]' icon={<GiEarthAmerica size={50} className="mx-auto mb-2" />} title='Interactive Learning Environment' />
            <AboutCard color='bg-[#2D69F0]' icon={<IoBookSharp size={50} className="mx-auto mb-2" />} title='Practical oriented content' />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  )
}
export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `} data-aos="fade-up">
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  )
}

export const AboutContent = () => {
  return (
    <section>
      <div className='heading text-center py-6 mt-9' data-aos="zoom-in">
        <h1 className='text-3xl font-semibold text-primary'>Recognitions</h1>
        <span className='text-sm mt-2 block'></span>
      </div>
      <div className='container flex md:flex-col md:mt-10 py-4 flex-row keyBg2 rounded-xl rounded-br-[40px]' data-aos="fade-right">
        <div className='left w-1/3 md:w-full mr-4 md:mr-0 p-4 relative' data-aos="zoom-in-right">
          <img src={national} alt='aboutImg' className='rounded-xl' />
        </div>
        <div className='heading  p-3 md:p-2 md:w-full'>
                <h1 className='text-3xl font-semibold text-[#EBF4F6]'>National</h1>
                <span className='text-[17px] mt-2 block leading-6 text-justify text-[#071952]'>NIELIT 'A' Level certification is recognized for government Jobs and is aligned at level 4 of National Skills Qualifications Framework (NSQF).</span>
                <span className='text-[17px] block leading-6 text-justify mt-8 text-[#071952]'>Curriculum has been designed by academic and industry experts and it equips a candidate with latest skills that meets the industry demand.</span>
              </div>
      </div>
      <br />
      <br />
      <div className='container flex md:flex-col md:mt-10 py-4 flex-row-reverse keyBg2 rounded-xl rounded-br-[40px]' data-aos="fade-right">
        <div className='left w-1/3 md:w-full mr-4 md:mr-0 p-4 relative' data-aos="zoom-in-right">
          <img src={international} alt='aboutImg' className='rounded-xl h-72' />
        </div>
        <div className='right w-2/3 md:w-full md:mt-5'>
          <div className='heading pr-4 ml-4 md:p-2 md:w-full mt-4'>
          <h1 className='text-3xl font-semibold text-[#EBF4F6]'>International</h1>
                  <span className='text-[17px] block leading-6 text-justify text-[#071952]'>
                    <span className="text-[#EBF4F6] underline">TAIWAN</span><span className="text-[#EBF4F6]"> :</span> The NIELIT 'A' Level qualification is also recognized as equivalent to the TQC Certification by the Taiwan - India HR Coorperation.
                  </span>
                  <span className='text-[17px] mt-3 pb-4 block leading-6 text-justify text-[#071952]'>
                    This recognition is based on the<a href="https://www.nielit.gov.in/sites/default/files/INT_MoU_Taiwan.pdf" target="blank"><span className="text-primary"> MOU</span></a> signed in August 2002 between NIELIT and NICC & SCS.
                  </span>
                  <span className='text-[17px] block leading-6 text-justify text-[#071952]'>
                    <span className="text-[#EBF4F6] underline">JAPAN</span><span className="text-[#EBF4F6]"> :</span> The NIELIT 'A' Level qualification is also recognized as equivalent to the Fundamental Information Technology Engineer Examination Certification by the Japan - Information Technology Engineers Examination of IPA.
                  </span>
                  <span className='text-[17px] mt-3  block leading-6 text-justify text-[#071952]'>
                    This recognition is based on the<a href={japan} target="blank"><span className="text-primary"> MOU</span></a> signed in Oct 2011 between NIELIT and Information-technology Promotion Agency,Japan.
                  </span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='container flex md:flex-col md:mt-10 py-4 flex-row keyBg2 rounded-xl rounded-br-[40px]' data-aos="fade-right">
        <div className='left w-1/3 md:w-full mr-4 md:mr-0 p-4 relative' data-aos="zoom-in-right">
          <img src={placementImg} alt='aboutImg' className='rounded-xl' />
        </div>
        <div className='right w-2/3 md:w-full md:mt-5'>
          <div className='heading pr-4 md:p-2 md:w-full mt-8'>
            <span className='text-[17px] mt-3 block leading-6 text-justify text-[#071952]'>'A' level course is a suitable for  government as well as
              private/public sector jobs. After completing the 'A' level, One can also work in banks and other IT companies.
            </span>
            <span className='text-[17px] mt-8 block leading-6 text-justify text-[#071952]'>Placement assistance is provided to all deserving candidates. NIELIT also organizes <span className="text-primary">"Rojgar Mela"</span> to provide ample opportunities to NIELIT students.
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='container flex md:flex-col flex-row-reverse md:mt-10 py-4 keyBg1 rounded-xl rounded-bl-[40px]' data-aos="fade-right">
        <div className='left w-1/3 md:w-full md:mr-0 relative pl-14 mt-3' data-aos="zoom-in-right">
          <img src={suitableImg} alt='aboutImg' className='rounded-xl md:mt-0 h-80' />
        </div>
        <div className='right w-2/3 md:w-full md:mt-5'>
          <div className='heading pl-4 md:p-2 mt-4 md:w-full'>
            <h1 className='text-3xl font-semibold text-[#EBF4F6]'>Eligibility</h1>
            <span className='text-[17px] block leading-6 text-justify mt-4'><ul className='my-5 text-[#071952]'>
              <li className='text-lg flex items-center gap-5'>
                <AiOutlineCheck className='text-[#EBF4F6] text-xs' />
                A Government recognized 3 Years polytechnic engineering diploma after 12th
              </li>
              <li className='text-lg flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-[#EBF4F6] text-[15px]' />
                Graduation
              </li>
              <li className='text-lg flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-[#EBF4F6] text-[15px]' />
                10th pass and certification in the immediate previous NSQF Level Qualification in
                relevant field.
              </li>
              <li className='text-lg flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-[#EBF4F6] text-[15px]' />
                Relevant Qualification of immediate previous NSQF Level with 2 Years of experience.
              </li>
              <li className='text-lg flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-[#EBF4F6] text-[15px] -mt-6' />
                In-line with NEP-2020, a candidate can pursue A-Level course concurrently with
Graduation/ Polytechnic Engineering Diploma.
              </li>
             
            </ul></span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='heading text-center mt-8' data-aos="zoom-in">
        <h1 className='text-3xl font-semibold text-primary'>Course <span className="text-[#071952]">Outline</span></h1>
        <span className='text-[17px] mt-2 block px-4'>4 Compulsory modules + 2 Practical + 1 Project</span>
      </div>
      <div className='container flex md:flex-col flex-row'>
        <div className='left w-1/2 md:w-full relative'>
          <div className='my-10 flex flex-col md:flex-row gap-10'>
            <div className="mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4 border text-[#071952]" data-aos="flip-right">Semester I</h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead>
                  <tr>
                    <th className="px-2 py-2 text font-bold border text-primary">Module Code</th>
                    <th className="px-2 py-2 text font-bold border text-[#071952]">Module</th>
                  </tr>
                </thead>
                <thead >
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A1-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Information Technology Tools and Network Basics</td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A2-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Web Designing & Publishing</td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A6-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Computer Organization and Operating
                      System </td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A5-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Data Structure Though Object Oriented <br />
                      Programming Language </td>
                    </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className='my-10 flex flex-col md:flex-row gap-10'>
            <div className="mx-auto text-center">
              <h1 className="px-2 py-2 mb-4 font-bold border text-[#071952]" data-aos="flip-right"> Practical I</h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead >
                  
                    <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">{"APR-I TO APR-IV"}</td>
                      <td className="border px-4 py-2 text-tartiary">{"Two practical’s based on A1-R5.1 and A2-R5.1"}</td>
                    </tr>
                  
                </thead>
              </table>
            </div>
          </div>
          <div className='my-10 flex flex-col md:flex-row gap-10'>
            <div className="mx-auto text-center">
              <h1 className="px-2 py-2 mb-4 font-bold border text-[#071952]" data-aos="flip-right"> Semester III</h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead >
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A8-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Systems Analysis, Design and Testing</td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A10.XR5.1</td>
                      <td className="border px-4 py-2 text-tartiary">One module out of A10.1-R5.1, A10.2-R5.1, A10.3-R5.1,<br /> A10.4-R5.1 and A10.5-R5.1</td>
                    </tr>
                </thead>
              </table>
            </div>
            <div className="mx-auto text-center -mt-2">
              <h1 className="px-2 py-2 mb-4 font-bold border text-[#071952]" data-aos="flip-right"> Practical III</h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead >
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">PJ-II</td>
                      <td className="border px-4 py-2 text-tartiary">Major Project (360) Based on Specialized area</td>
                    </tr>
                
                </thead>
              </table>
            </div>
          </div>
          <div className='md:w-full'>
            <div className="text-center">
              <div className='my-4 flex flex-col md:flex-row'>
                <div className="mx-auto">
                  <h1 className="text-[18px] font-bold mb-3 border -mt-7 text-primary" data-aos="flip-left">Download PDF</h1>
                  <div className='flex justify-center' data-aos="flip-right">
                    <a href={pdffile} download="pdffile">
                      <img src={Screenshotinpdf} alt=""
                        className='border mb-4 h-96 py-2 px-4 rounded-xl' />
                    </a>
                  </div>
                  <table className="w-full table-auto ">
                    <thead>
                      <tr>
                        <th data-aos="flip-left"><a href={pdffile} download="pdffile" className="px-4 py-2 text font-bold border underline"><button className='px-5 py-2 border text-white bg-primary hover:shadow-2xl border-white rounded-md text-sm '>Download PDF</button></a></th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right w-1/2 md:w-full'>
          <div className='my-10 flex flex-col md:flex-row gap-10'>
            <div className="mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4 border text-[#071952]" data-aos="flip-left">Semester II</h1>
              <table className="w-full table-auto" data-aos="flip-right">
                <thead>
                  <tr >
                    <th className="px-4 py-2 text font-bold border text-primary">Module Code</th>
                    <th className="px-2 py-2 text font-bold border text-[#071952] ">Module</th>
                  </tr>
                </thead>
                <thead >
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A3-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Programming and Problem Solving
                      through Python</td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A4-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Internet of Things and its Applications</td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A7-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Database Technologies</td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A9.XR5.1</td>
                      <td className="border px-4 py-2 text-tartiary">One module out of A9.1-R5.1, A9.2-R5.1, A9.3-R5.1,<br /> A9.4-R5.1 and A9.5-R5.1</td>
                    </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className='my-10 flex flex-col md:flex-row gap-10'>
            <div className="mx-auto text-center">
              <h1 className="font-bold px-8 py-2 mb-4 border text-[#071952]" data-aos="flip-left">Practical II</h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead >
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">APR-I to APR-IV</td>
                      <td className="border px-4 py-2 text-tartiary">Two practical’s based on A3-R5.1 and A4-R5.1</td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">APR-V</td>
                      <td className="border px-4 py-2 text-tartiary">Practical based on A5-R5.1, A6-R5.1
                      and A7-R5.1</td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">PJ-I</td>
                      <td className="border px-4 py-2 text-tartiary">Mini Project </td>
                    </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className='my-10 flex flex-col md:flex-row gap-10'>
            <div className="mx-auto text-center -mt-1">
              <h1 className="font-bold px-2 py-2 mb-4 border text-[#071952]" data-aos="flip-left" >List Of Specialized Areas</h1>
              <h1 className="font-bold px-2 py-1  border text-[#071952]" data-aos="flip-left">Data Analytics</h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead >
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A9.1-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Big Data Analytics using Hadoop
                      </td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A10.1-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Data Science using Python
                      </td>
                    </tr>
                
                </thead>
                
              </table>
              <h1 className="font-bold px-2 py-1  border text-[#071952]" data-aos="flip-left">Web Applications
              </h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead >
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A9.2-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Web Application using PHP
                      </td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A10.2-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Full Stack Web Development using <br /> MVC Framework

                      </td>
                    </tr>
                
                </thead>
                
              </table>
              <h1 className="font-bold px-2 py-1  border text-[#071952]" data-aos="flip-left">Information Security
              </h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead >
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A9.3-R5.1 </td>
                      <td className="border px-4 py-2 text-tartiary">Network Management
                      </td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A10.3-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Information Security Management

                      </td>
                    </tr>
                
                </thead>
                
              </table>
              <h1 className="font-bold px-2 py-1  border text-[#071952]" data-aos="flip-left">Internet of Things
              </h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead >
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A9.4-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Internet of Things (IoT) a Practical Approach
                      </td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A10.4-R5.1 </td>
                      <td className="border px-4 py-2 text-tartiary">Internet of Things (IoT)using Raspberry Pi


                      </td>
                    </tr>
                
                </thead>
                
              </table>
              <h1 className="font-bold px-2 py-1  border text-[#071952]" data-aos="flip-left">Artificial Intelligence
              </h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead >
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A9.5-R5.1  </td>
                      <td className="border px-4 py-2 text-tartiary">Artificial Intelligence Concepts and R Programming
                      </td>
                    </tr>
                <tr>
                      <td className="border px-6 py-2 text font-medium text-tartiary">A10.5-R5.1</td>
                      <td className="border px-4 py-2 text-tartiary">Machine Learning using Python


                      </td>
                    </tr>
                
                </thead>
                
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='container flex md:flex-col flex-row'>
        <div className='left w-1/2 md:w-full relative'>
          <div className='md:w-full'>
            <div className="text-center">
              <div className='my-4 flex flex-col md:flex-row'>
                <div className="mx-auto">
                  <h1 className="text-[18px] font-bold mb-4 border text-primary" data-aos="flip-left">Download PDF</h1>
                  <div className='flex justify-center' data-aos="flip-right">
                    <a href={pdffile} download="pdffile">
                      <img src={Screenshotinpdf} alt=""
                        className='border mb-4 h-96 py-2 px-4 rounded-xl' />
                    </a>
                  </div>
                  <table className="w-full table-auto ">
                    <thead>
                      <tr>
                        <th data-aos="flip-left"><a href={pdffile} download="pdffile" className="px-4 py-2 text font-bold border underline"><button className='px-5 py-2 border text-white bg-primary hover:shadow-2xl border-white rounded-md text-sm'>Download PDF</button></a></th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right w-1/2 md:w-full'>
          <div className='md:w-full'>
            <div className="text-center">
              <div className='my-4 flex flex-col md:flex-row'>
                <div className="mx-auto">
                  <h1 className="text-[18px] font-bold mb-4 border text-primary" data-aos="flip-right">Register</h1>
                  <div className='flex justify-center' data-aos="flip-left">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1-2LdbI75MX_mHwYruA8j2yVb973zgfza8zEmGBH9XbGDWg/viewform" target='blank'>
                      <img src={join} alt=""
                        className='border mb-4 h-96 py-2 px-4 rounded-xl' />
                    </a>
                  </div>
                  <table className="w-full table-auto">
                    <thead>
                      <tr>
                        <th data-aos="flip-right"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc1-2LdbI75MX_mHwYruA8j2yVb973zgfza8zEmGBH9XbGDWg/viewform" target='blank'><button className='px-5 py-2 border text-white bg-primary hover:shadow-2xl border-white rounded-md text-sm'>Apply Now</button></a></th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}
