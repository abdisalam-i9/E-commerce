function Categories (){
    return <>
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Dooro Qaybta Aad Rabto</h2>
          <p className="text-gray-500 mt-2">Waxaan kuu haynaa qayb kasta oo aad nolol maalmeedkaaga ugu baahan tahay.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md transition cursor-pointer">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              <i className="fas fa-laptop"></i>
            </div>
            <h3 className="font-bold text-gray-800">Technoolojiyada</h3>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md transition cursor-pointer">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              <i className="fas fa-tshirt"></i>
            </div>
            <h3 className="font-bold text-gray-800">Dharka & Moodada</h3>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md transition cursor-pointer">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              <i className="fas fa-couch"></i>
            </div>
            <h3 className="font-bold text-gray-800">Agabka Guriga</h3>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md transition cursor-pointer">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              <i className="fas fa-running"></i>
            </div>
            <h3 className="font-bold text-gray-800">Cayaaraha</h3>
          </div>
        </div>
      </section>

    </>
}
export default Categories