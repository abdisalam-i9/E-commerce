import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";
function About(){
    const [products, setProducts] = useState([]);
     const getProduct = () => {
    axios
      .get("https://api.escuelajs.co/api/v1/users")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
  }, []);


    return<>
    <section class="bg-blue-600 text-white py-20 px-4 text-center">
        <div class="max-w-3xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Baro Cidda Aan Nahay</h1>
            <p class="text-lg md:text-xl text-blue-100">Waxaan nahay koox u taagan inay kuu keento xalalka ugu fiican ee casriga ah.</p>
        </div>
    </section>

    <section class="max-w-6xl mx-auto py-16 px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-6 relative py-2">
                    Sheekadeena
                    <span class="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></span>
                </h2>
                <p class="text-gray-600 leading-relaxed mb-4">
                    Waxaan ku bilaawnay safarkayaga fikrad fudud: inaan isbeddel dhab ah ka samayno bulshada dhexdeeda annagoo bixinayna adeegyo tayo sare leh oo qof walba heli karo. Marxalado badan ka dib, maanta waxaan ku guuleysanay inaan dhisno kalsooni adag.
                </p>
                <p class="text-gray-600 leading-relaxed">
                    Hadafkayagu waa inaan sii wadno hal-abuurka iyo horumarka, annagoo had iyo jeer mudnaanta koowaad siinayna baahiyaha macaamiisheena iyo tayada shaqadeeda.
                </p>
            </div>
            <div class="w-full h-80 bg-gray-300 rounded-lg shadow-lg overflow-hidden flex items-center justify-center text-gray-500">
              <img src="" alt="" />
                <span>[ Sawirka Shirkadda ama Kooxda ]</span>
            </div>
        </div>
    </section>

    <section class="bg-white py-16 px-4 border-t border-b border-gray-100">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">🎯</div>
                <h3 class="text-xl font-semibold mb-2">Hadafkayaga (Mission)</h3>
                <p class="text-gray-600 text-sm leading-relaxed">Inaan bixinno adeeg hufan oo la isku halayn karo, kaas oo daboolaya baahida macaamiishayada.</p>
            </div>
            <div class="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">👁️</div>
                <h3 class="text-xl font-semibold mb-2">Hiigsigaga (Vision)</h3>
                <p class="text-gray-600 text-sm leading-relaxed">Inaan noqonno doorashada koowaad iyo hoggaamiyaha dhanka tayada iyo kalsoonida ee gobolka.</p>
            </div>
            <div class="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">💎</div>
                <h3 class="text-xl font-semibold mb-2">Qiimaha (Values)</h3>
                <p class="text-gray-600 text-sm leading-relaxed">Daacadnimo, wada-shaqayn, hal-abuur joogto ah, iyo ixtiraamka macaamiisha.</p>
            </div>
        </div>
    </section>

    

    </>

}
export default About