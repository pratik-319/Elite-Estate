import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto '>
        <h1 className="text-3xl font-semibold text-center my-7 ">Create Listing</h1>
        <form action="" className='flex flex-col sm:flex-row gap-4'>

        <div className='flex flex-col gap-4 flex-1'>

       
            <div className="flex flex-col gap-4 flex-1">
                <input type='text' className='border p-3 rounded' placeholder='Name'id='Name' maxLength='62' minLength='10' required/>
                <textarea type='text' className='border p-3 rounded' placeholder='Discription'id='Discription' required/>
                <input type='text' className='border p-3 rounded' placeholder='Address'id='Address'  required/>
            </div>
            <div className="flex gap-6 flex-wrap">
                <div className="flex gap-2">
                    <input type="checkbox" id='sale'className='w-5' />
                    <span>Sell</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" id='rent'className='w-5' />
                    <span>Rent</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" id='parking'className='w-5' />
                    <span>Parking spot</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" id='furnish'className='w-5' />
                    <span>Furnished</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" id='offer'className='w-5' />
                    <span>Offer</span>
                </div>
            </div>
            <div className='flex flex-wrap gap-6'>
                <div className='flex items-center gap-2'>
                    <input type='number' id='bedrooms' className='p-3 border border-grey-300 rounded-lg' min='1' max='10' required />
                    <p>Beds</p>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='number' id='baths' className='p-3 border border-grey-300 rounded-lg' min='1' max='10' required />
                    <p>Baths</p>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='number' id='regularPrice' className='p-3 border border-grey-300 rounded-lg' min='1' max='10' required />
                    <div className='flex flex-col item-center'>
                    <p>Regular Price</p>
                    <span className='text-x-5'>(₹ / months)</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='number' id='discountPrice' className='p-3 border border-grey-300 rounded-lg' min='1' max='10' required />
                    
                    <div className='flex flex-col item-center'>
                    <p>Discounted Price</p>
                    <span className='text-x-5'>(₹ / months)</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col flex-1 gap-4'>
            <p className='font-semibold'>Images:
            <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max6)</span>
            </p>
            <div className='flex  gap-4 '>
                <input type='file' id='images' accept='image/*' multiple  className='p-3 border border-gray-300 rounded w-full'/>
                <buton className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</buton>
            </div>
            <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create Listing</button>
        </div>
        </form>
    </main>
    );

  }