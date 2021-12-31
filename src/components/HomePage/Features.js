import React from 'react'
import FeatureTag from './FeatureTag'

const FeatureContent = [
    {name: "Bussiness Stratagy", content: "I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction"},
]

function Features() {
    return (
        <div className="flex flex-col gap-10 md:justify-start justify-center md:items-start items-center pb-10 border-b-2 border-black my-14">
            <div className="flex flex-col gap-4 md:justify-start justify-center md:items-start items-center">
                <span className="text-red-600 text-base font-normal">FEATURE</span>
                <h1 className="text-gray-400 text-6xl font-bold tracking-widest">What I Do</h1>
            </div>
            <div className="w-full grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8">
                <FeatureTag />
                <FeatureTag />
                <FeatureTag />
                <FeatureTag />
                <FeatureTag />
                <FeatureTag />
            </div>
        </div>
    )
}

export default Features
