function Footer(){
    return <>
    <footer class="bg-gray-900 text-gray-300 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="space-y-4">
                <h3 class="text-white text-xl font-bold">E-Dukaanka</h3>
                <p class="text-sm text-gray-400">
                    Waxaan nahay goobta ugu kalsoonida badan ee aad ka iibsan karto agab kasta oo aad u baahan tahay adigoo gurigaaga jooga.
                </p>
            </div>
            
            <div class="space-y-2">
                <h4 class="text-white font-semibold">Menu-yada</h4>
                <ul class="space-y-1 text-sm text-gray-400">
                    <li><a href="#" class="hover:text-white transition">Home</a></li>
                    <li><a href="#" class="hover:text-white transition">Adeegyada</a></li>
                    <li><a href="#" class="hover:text-white transition">Nagu Saabsan</a></li>
                    <li><a href="#" class="hover:text-white transition">Nala Soo Xiriir</a></li>
                </ul>
            </div>
            
            <div class="space-y-4">
                <h4 class="text-white font-semibold">Ku Biir Wararkeena</h4>
                <p class="text-sm text-gray-400">Halkaan ku qor email-kaaga si aad u hesho qiimo dhimista ugu dambeysay.</p>
                <div class="flex">
                    <input type="email" placeholder="Email-kaaga ...." className="w-full px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none border border-gray-700" />
                    <button class="bg-indigo-600 text-white px-4 rounded-r-lg hover:bg-indigo-700 transition cursor-pointer">Diiwangeli</button>
                </div>
            </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
            &copy; 2026 E-Dukaanka. Xuquuqda oo dhan waa dhowran tahay.
        </div>
    </footer>
    </>
}
export default Footer