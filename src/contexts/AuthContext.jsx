import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import api from "../services/api.js";
import axios from "axios";
import QRCodeLink from "qrcode";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [franquias, setFranquias] = useState({});
  const [sessoes, setSessoes] = useState({});
  const [filterValue, setFilterValue] = useState('');
  const [like, setLike] = useState(0)
  const [cart, setCart] = useState([])
  const [filteredCart, setFilteredCart] = useState([])
  const [totalValue, setTotalValue] = useState(0)
  const [link, setLink] = useState("");
  const [qrcodelink, setQrcodelink] = useState("");
  const [imageFile, setImageFile] = useState("")


  const navigate = useNavigate();


  /*-------------------- Skip line --------------------*/

  useEffect(() => {
    multipleGets();
  }, []);

  const multipleGets = async () => {
    const token = localStorage.getItem("@NMPuser:token");

    if(token) {
      
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const userData = api.get('/usuarios/logged');
        const franquiaData = api.get('/franquias');
        const sessoesData = api.get('/sessoes')
        
        const [response1, response2, response3] = await axios.all([userData, franquiaData, sessoesData]);
        setUser(response1.data);
        setFranquias(response2.data);
        setSessoes(response3.data)
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }   
  };

  const GiveALike = () => {
    setLike(like + 1)
  }

  const addToCart = (elem) => {
    const item = cart.find(item => item.id === elem.id);

    if (item) {
      const updatedItems = cart.map(item =>
        item.id === elem.id ? { ...item, quantity: item.quantity + 1, amountedPrice: item.price * (item.quantity + 1)} : item);
      setCart(updatedItems);
  
    } else {
      const newItemCart = {
        id: elem.id,
        itemName: elem.name,
        quantity: 1,
        price: elem.actualPrice,
        amountedPrice: elem.actualPrice,
        isSelected: true
      }
      setCart([...cart, newItemCart]);
      setTotalValue(totalValue + newItemCart.price)
    }

    toast.success("Adicionado ao carrinho", {
      icon: "⭐",
      style: {
        fontFamily: "var(--font-primary-nunito)",
        fontWeight: "var(--font-weight-700)",
        borderRadius: "10px",
        backgroundColor: "var(--color-feedback-success)",
        color: "var(--color-black-mode)",
        width: "300px",
        height: "60px",
      },
    });
  }

  const removeToCart = (id) => {
    const removedItems = cart.filter(el => el.id !== id)
    setCart(removedItems)
  }

  /*-------------------- Skip line --------------------*/

  let value = 0

  cart.forEach((elem) => {
    value += (elem.price * elem.quantity)
  })

  /*-------------------- Skip line --------------------*/

  async function LoginUser(data) {
    const newData = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await api.post("/login", newData);
      const { token, authorities } = response.data;

      localStorage.setItem("@NMPuser:token", token);
      localStorage.setItem("@NMPuser:id", response.data.authorities.find((el) => el === "USER" || el === "MASTER"));

      toast.success("Login efetuado com sucesso", {
        icon: "⭐",
        style: {
          fontFamily: "var(--font-primary-nunito)",
          fontWeight: "var(--font-weight-700)",
          borderRadius: "10px",
          backgroundColor: "var(--color-feedback-success)",
          color: "var(--color-black-mode)",
          width: "300px",
          height: "60px",
        },
      });

      setTimeout(() => {
        multipleGets()
        if(localStorage.getItem("@NMPuser:id") === "USER") {
          navigate("/dashboardUser", { replace: true });
        } else if (localStorage.getItem("@NMPuser:id") === "MASTER") {
          navigate("/dashboardAdmin", { replace: true });
        }
      }, 5000)

      
    } catch (error) {
      console.error(error);
      toast.error("Login não efetuado", {
        icon: "✘",
        style: {
          fontFamily: "var(--font-primary-nunito)",
          fontWeight: "var(--font-weight-700)",
          borderRadius: "10px",
          backgroundColor: "var(--color-feedback-negative)",
          color: "var(--color-black-mode)",
          width: "250px",
          height: "60px",
        },
      });
    }
  }

/*-------------------- Skip line --------------------*/

  async function SubmitFunction(data) {
    const newData = {
      name: data.name,
      nickname: data.nickname,
      email: data.email,
      password: data.password,
      cpf: data.cpf,
      cellphone: data.cellphone,
      sunExposureTime: data.foreignerdoc,
    };

    try {
      const response = await api.post("/usuarios", newData);
      toast.success("Usuário cadastrado", {
        icon: "⭐",
        style: {
          fontFamily: "var(--font-primary-nunito)",
          fontWeight: "var(--font-weight-700)",
          borderRadius: "10px",
          backgroundColor: "var(--color-feedback-success)",
          color: "var(--color-black-mode)",
          width: "300px",
          height: "60px",
        },
      });

      setUser(response.data);

      setTimeout(() => {
        navigate("/", { replace: true });
      }, 3000)

    } catch (er) {
      toast.error("Usuário já cadastradp", {
        icon: "✘",
        style: {
          fontFamily: "var(--font-primary-nunito)",
          fontWeight: "var(--font-weight-700)",
          borderRadius: "10px",
          backgroundColor: "var(--color-feedback-negative)",
          color: "var(--color-black-mode)",
          width: "250px",
          height: "60px",
        },
      });
      console.error(er);
    }
  }

/*-------------------- Skip line --------------------*/

  async function SubmitFilter(data) {
    try {
      const response = await api.get("/sessoes", {
        params: {
          name: data.name,
          area: data.area,
          minPrice: data.minPrice,
          maxPrice: data.maxPrice,
        }
      });
      setFilteredCart([])
      console.log(response.data)
      if(response.data === []) {
        toast.error("Nada encontrado", {
          icon: "✘",
          style: {
            fontFamily: "var(--font-primary-nunito)",
            fontWeight: "var(--font-weight-700)",
            borderRadius: "10px",
            backgroundColor: "var(--color-feedback-negative)",
            color: "var(--color-black-mode)",
            width: "250px",
            height: "60px",
          },
        });
      } else {
        setFilteredCart(response.data)
        toast.success("Filtrado com sucesso");
      }

    } catch (error) {
      toast.error("Filtro não efetuado.");
      console.error(error);
    }
  }

/*-------------------- Skip line --------------------*/

  async function Payment(data) {

    let sessions = data.numberId.map((id, index) => {
      return {id: id, amount: data.amount[index]};
    });
    
    const newData = {
      sessions
    };

    try {
      const response = await api.post("/compras", newData);
      toast.success("Qr Gerado com sucesso!");

      setLink(response.data.qrCode)

      QRCodeLink.toDataURL(
        response.data.qrCode,
        {
          width: 600,
          margin: 3,
        },
        function (err, url) {
          if(err) {
            console.log(err)
          } else {
            setQrcodelink(url)
          }
        }
      );

    } catch (error) {
      toast.error("User não cadastrado.");
      console.error(error);
    }
  }


  /*-------------------- Skip line --------------------*/

  async function SubmitSessionCreation(data) {
    const newData = {
      name: data.name,
      mainImageUrl: imageFile,
      originalPrice: data.originalPrice,
      actualPrice: data.actualPrice,
      area: data.area,
      duration: data.duration,
      sessionInterval: data.sessionInterval,
      sunExposureTime: data.sunExposureTime,
    };

    try {
      await api.post("/sessoes", newData);
      toast.success("Sessão criada com sucesso");


    } catch (error) {
      toast.error("Sessão não cadastrada");
      console.error(error);
    }
  }

  /*-------------------- Skip line --------------------*/

  async function SubmitSessionImage(data) {
    try {
      const formData = new FormData();
      formData.append('image', data)
      const response = await api.post("/sessoes/imagens", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success("Imagem Adicionada", {
        icon: "⭐",
        style: {
          fontFamily: "var(--font-primary-nunito)",
          fontWeight: "var(--font-weight-700)",
          borderRadius: "10px",
          backgroundColor: "var(--color-feedback-success)",
          color: "var(--color-black-mode)",
          width: "260px",
          height: "60px",
        },
      }
      );

      setImageFile(response.data.url)

    } catch (error) {
      toast.error("Insira uma imagem menor", {
        icon: "✘",
        style: {
          fontFamily: "var(--font-primary-nunito)",
          fontWeight: "var(--font-weight-700)",
          borderRadius: "10px",
          backgroundColor: "var(--color-feedback-negative)",
          color: "var(--color-black-mode)",
          width: "250px",
          height: "60px",
        },
      });
      console.error(error);
    }
  }

/*-------------------- Skip line --------------------*/

function openMenu() {
  setShow((current) => !current);
}

/*-------------------- Skip line --------------------*/

function Logout() {
  localStorage.clear();
  navigate("/", { replace: true });
}

/*-------------------- Skip line --------------------*/

  return (
    <>
      <AuthContext.Provider
        value={{
          show,
          user,
          franquias,
          loading,
          filterValue,
          sessoes,
          like,
          cart,
          totalValue,
          value,
          filteredCart,
          link,
          qrcodelink,
          imageFile,
          setLoading,
          SubmitFunction,
          SubmitFilter,
          setShow,
          LoginUser,
          setFilterValue,
          GiveALike,
          setCart,
          addToCart,
          setTotalValue,
          removeToCart,
          Logout,
          setFilteredCart,
          Payment,
          SubmitSessionCreation,
          SubmitSessionImage,
          openMenu
        }}
      >
        {children}
      </AuthContext.Provider>
      <Toaster position="bottom-right"
      reverseOrder={true}
      toastOptions={{
        duration: 3000,     
      }}
      />
    </>
  );
};

export default AuthProvider;