import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
import Line from '../elements/Line'

const TimeLine = () => {
  return (
    <div className='bg-color1 text-white font-montserrat' id='timeline'>
        <div className='lg:px-20 py-10'>
            <h3 className='font-clash text-xl md:text-3xl font-bold text-center'>Timeline</h3>
            <p className='hidden md:block md:text-sm font-normal text-center font-montserrat mt-[16px] lg:leading-loose lg:pe-12'>Here is the breakdown of the time we anticipate <br /> using for the upcoming event.</p>
            <p className='text-xs md:hidden font-normal text-center font-montserrat mt-[16px] leading-normal lg:pe-12'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>

            {/* Medium Screens */}  
            <div className="hidden md:block container my-5">
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                    <div className="flex flex-col md:contents">
                        <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                            <h3 className="font-bold font-montserrat text-end text-xs md:text-2xl mb-1 text-color3">Hackathon Announcement</h3>
                            <p className="leading-tight text-end text-sm">
                            The getlinked tech hackathon 1.0 is formally announced <br /> to the general public and teams begin to get ready to register
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-color3 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70 flex justify-center font-bold">1</div>
                        </div>
                        <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto">
                            <h3 className="font-bold font-montserrat text-xs md:text-2xl text-color3 mt-5">November 18, 2023</h3>
                        </div>
                    </div>
                    
                    <div className="flex flex-col-reverse md:contents">
                        <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                        <h3 className="font-bold font-montserrat text-xs md:text-2xl text-left text-color3 mt-5">November 18, 2023</h3>
                        </div>
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-color3 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70 flex justify-center font-bold">2</div>
                        </div>
                        <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto">
                            <h3 className="font-bold font-montserrat text-xs md:text-2xl mb-3 text-color3">Teams Registration begins</h3>
                            <p className="leading-tight text-start text-sm">
                                Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row-reverse md:contents">
                        <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                            <h3 className="font-bold font-montserrat text-end text-xs md:text-2xl mb-1 text-color3">Teams Registration ends</h3>
                            <p className="leading-tight text-end text-sm">
                                Interested Participants are no longer Allowed to <br /> register
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-color3 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70 flex justify-center font-bold">3</div>
                        </div>
                        <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto">
                            <h3 className="font-bold font-montserrat text-xs md:text-2xl text-color3 mt-5">November 18, 2023</h3>
                        </div>
                    </div>
                    
                    <div className="flex flex-col-reverse md:contents">
                        <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                        <h3 className="font-bold font-montserrat text-xs md:text-2xl text-left text-color3 mt-5">November 18, 2023</h3>
                        </div>
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-color3 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70 flex justify-center font-bold">4</div>
                        </div>
                        <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto">
                            <h3 className="font-bold font-montserrat text-xs md:text-2xl mb-3 text-color3">Announcement of the accepted teams and ideas</h3>
                            <p className="leading-tight text-start text-sm">
                                All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse md:contents">
                        <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                            <h3 className="font-bold font-montserrat text-end text-xs md:text-2xl mb-1 text-color3">Getlinked Hackathon 1.0 Offically Begins</h3>
                            <p className="leading-tight text-end text-sm">
                                Accepted teams can now proceed to build their <br /> ground breaking skill driven solutions
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-color3 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70 flex justify-center font-bold">5</div>
                        </div>
                        <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto">
                            <h3 className="font-bold font-montserrat text-xs md:text-2xl text-color3 mt-5">November 18, 2023</h3>
                        </div>
                    </div>
                    
                    <div className="flex flex-col-reverse md:contents">
                        <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                        <h3 className="font-bold font-montserrat text-xs md:text-2xl text-left text-color3 mt-5">November 18, 2023</h3>
                        </div>
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-color3 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-color4 from-30 via-color3 to-color2 to-70 flex justify-center font-bold">6</div>
                        </div>
                        <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto">
                            <h3 className="font-bold font-montserrat text-xs md:text-2xl mb-3 text-color3">Demo Day</h3>
                            <p className="leading-tight text-start text-sm">
                                Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day
                            </p>
                        </div>
                    </div>  
                </div>
            </div>

            {/* Small Screens */}  
            <div className="md:hidden my-5 font-montserrat text-xs">
                <Timeline>
                    <TimelineItem className='mb-6'>
                        <TimelineConnector className='text-color3' />
                        <TimelineBody className="text-xs pt-6">
                            <Typography variant="small" color="gary" className="font-normal text-white">
                            <span className='text-color3 font-bold'>Hackathon Announcement <br /> </span>
                            The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register
                            </Typography>
                        </TimelineBody>
                        <TimelineHeader className="-my-3">
                            <TimelineIcon className='bg-color3 text-xs'>1</TimelineIcon>
                            <Typography variant="small" color="blue-gray" className="font-bold text-xs text-color3">
                            November 18, 2023
                            </Typography>
                        </TimelineHeader>
                    </TimelineItem>

                    <TimelineItem className='mb-6'>
                        <TimelineConnector className='text-color3' />
                        <TimelineBody className="text-xs pt-6">
                            <Typography variant="small" color="gary" className="font-normal text-white">
                            <span className='text-color3 font-bold'>Teams Registration begins <br /> </span>
                            Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
                            </Typography>
                        </TimelineBody>
                        <TimelineHeader className="-my-3">
                            <TimelineIcon className='bg-color3 text-xs'>2</TimelineIcon>
                            <Typography variant="small" color="blue-gray" className="font-bold text-xs text-color3">
                            November 18, 2023
                            </Typography>
                        </TimelineHeader>
                    </TimelineItem>

                    <TimelineItem className='mb-6'>
                        <TimelineConnector className='text-color3' />
                        <TimelineBody className="text-xs pt-6">
                            <Typography variant="small" color="gary" className="font-normal text-white">
                            <span className='text-color3 font-bold'>Teams Registration ends<br /> </span>
                            Interested Participants are no longer Allowed to register
                            </Typography>
                        </TimelineBody>
                        <TimelineHeader className="-my-3">
                            <TimelineIcon className='bg-color3 text-xs'>3</TimelineIcon>
                            <Typography variant="small" color="blue-gray" className="font-bold text-xs text-color3">
                            November 18, 2023
                            </Typography>
                        </TimelineHeader>
                    </TimelineItem>

                    <TimelineItem className='mb-6'>
                        <TimelineConnector className='text-color3' />
                        <TimelineBody className="text-xs pt-6">
                            <Typography variant="small" color="gary" className="font-normal text-white">
                            <span className='text-color3 font-bold'>Interested Participants are no longer Allowed to register<br /> </span>
                            All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced
                            </Typography>
                        </TimelineBody>
                        <TimelineHeader className="-my-3">
                            <TimelineIcon className='bg-color3 text-xs'>4</TimelineIcon>
                            <Typography variant="small" color="blue-gray" className="font-bold text-xs text-color3">
                            November 18, 2023
                            </Typography>
                        </TimelineHeader>
                    </TimelineItem>
                    <TimelineItem className='mb-6'>
                        <TimelineConnector className='text-color3' />
                        <TimelineBody className="text-xs pt-6">
                            <Typography variant="small" color="gary" className="font-normal text-white">
                            <span className='text-color3 font-bold'>Getlinked Hackathon 1.0 Offically Begins<br /> </span>
                            Accepted teams can now proceed to build their ground breaking skill driven solutions
                            </Typography>
                        </TimelineBody>
                        <TimelineHeader className="-my-3">
                            <TimelineIcon className='bg-color3 text-xs'>5</TimelineIcon>
                            <Typography variant="small" color="blue-gray" className="font-bold text-xs text-color3">
                            November 18, 2023
                            </Typography>
                        </TimelineHeader>
                    </TimelineItem>
                    <TimelineItem className='mb-6'>
                        <TimelineConnector className='text-color3' />
                        <TimelineBody className="text-xs pt-6">
                            <Typography variant="small" color="gary" className="font-normal text-white">
                            <span className='text-color3 font-bold'>Demo Day<br /> </span>
                            Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day
                            </Typography>
                        </TimelineBody>
                        <TimelineHeader className="-my-3">
                            <TimelineIcon className='bg-color3 text-xs'>6</TimelineIcon>
                            <Typography variant="small" color="blue-gray" className="font-bold text-xs text-color3">
                            November 18, 2023
                            </Typography>
                        </TimelineHeader>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
        <Line />
    </div>
  )
}

export default TimeLine
